const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Database Setup
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Connected to SQLite database');
        
        // Create Tables
        db.serialize(() => {
            // Users Table
            db.run(`CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                password TEXT,
                phone TEXT,
                role TEXT
            )`);
            
            // Products/Stock Table
            db.run(`CREATE TABLE IF NOT EXISTS products (
                id TEXT PRIMARY KEY,
                nameEn TEXT,
                nameTa TEXT,
                stock REAL,
                unit TEXT,
                price REAL,
                threshold REAL
            )`);

            // Orders Table
            db.run(`CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                item_id TEXT,
                qty REAL,
                wholesaler_id TEXT,
                status TEXT,
                date TEXT
            )`);

            // Suppliers Table
            db.run(`CREATE TABLE IF NOT EXISTS suppliers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                mobile_number TEXT
            )`);

            // Sales Table (for Tracking Product Barcode Sales)
            db.run(`CREATE TABLE IF NOT EXISTS sales (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                item_id TEXT,
                qty REAL,
                date TEXT
            )`);
        });
    }
});

// Routes

// 1. Authentication
app.post('/api/signup', (req, res) => {
    const { username, password, phone, role } = req.body;
    db.run(
        'INSERT INTO users (username, password, phone, role) VALUES (?, ?, ?, ?)',
        [username, password, phone, role || 'user'],
        function(err) {
            if (err) {
                return res.status(400).json({ error: 'Username already exists or invalid data' });
            }
            res.json({ message: 'User created successfully', id: this.lastID });
        }
    );
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        if (!row) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = 'mock-token-' + row.id;
        res.json({ success: true, message: 'Login successful', token, user: { id: row.id, username: row.username, role: row.role, phone: row.phone, mobile_number: row.phone } });
    });
});

// 2. Stock Management
app.get('/api/stock', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(rows);
    });
});

app.post('/api/stock', (req, res) => {
    try {
        const { id, nameEn, nameTa, stock, unit, price, threshold } = req.body;
        db.run(
            `INSERT OR REPLACE INTO products (id, nameEn, nameTa, stock, unit, price, threshold) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [id, nameEn, nameTa, stock, unit, price, threshold],
            function(err) {
                if (err) {
                    return res.status(400).json({ error: 'Failed to update stock' });
                }
                res.json({ message: 'Stock updated successfully' });
            }
        );
    } catch (error) {
        console.error('Error in /api/stock:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 3. Wholesaler Orders
app.get('/api/orders', (req, res) => {
    db.all('SELECT * FROM orders', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(rows);
    });
});

app.post('/api/orders', (req, res) => {
    const { item_id, qty, wholesaler_id, status } = req.body;
    const date = new Date().toISOString();
    db.run(
        'INSERT INTO orders (item_id, qty, wholesaler_id, status, date) VALUES (?, ?, ?, ?, ?)',
        [item_id, qty, wholesaler_id, status || 'pending', date],
        function(err) {
            if (err) {
                return res.status(400).json({ error: 'Failed to create order' });
            }
            res.json({ message: 'Order placed successfully', id: this.lastID });
        }
    );
});

// Middleware to verify token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    
    if (token.startsWith('mock-token-')) {
        req.user = { id: token.split('-')[2] };
        next();
    } else {
        res.sendStatus(403);
    }
}

app.get('/api/forecast/:productId', (req, res) => {
    res.json([
        { historical: 10, forecast: 12 },
        { historical: 15, forecast: 14 },
        { historical: 8, forecast: 10 }
    ]);
});

// New 6-Month AI Predictions Global Chart API
app.get('/api/predictions/6-month-chart', (req, res) => {
    db.all('SELECT id, nameEn, stock, threshold FROM products', [], (err, products) => {
        if (err) return res.status(500).json({ error: 'Database error' });

        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const d = new Date();
        const currentMonth = d.getMonth();
        
        const months = [];
        for (let i = 0; i < 6; i++) {
            months.push(monthNames[(currentMonth + i) % 12]);
        }

        const productData = products.map(p => {
            let dailyUsage = Math.max(1, Math.round((p.threshold || 20) / 7));
            let baseMonthly = dailyUsage * 30;
            
            // Generate 6 months of slightly varied data
            let monthlyDemand = [];
            for (let i = 0; i < 6; i++) {
                // Add some random variation between -10% and +20%
                let variation = 0.9 + (Math.random() * 0.3);
                monthlyDemand.push(Math.round(baseMonthly * variation));
            }

            return {
                id: p.id,
                name: p.nameEn || p.id,
                stock: p.stock || 0,
                dailyUsage: dailyUsage,
                monthlyDemand: monthlyDemand
            };
        });

        res.json({
            months: months,
            products: productData
        });
    });
});

app.put('/api/inventory/:productId/add-stock', authenticateToken, (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity_added } = req.body;
        db.run('UPDATE products SET stock = stock + ? WHERE id = ?', [quantity_added, productId], function(err) {
            if (err) return res.status(500).json({ error: 'Failed to update stock' });
            res.json({ status: 'success' });
        });
    } catch (error) {
        console.error('Error in /api/inventory/:productId/add-stock:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/suppliers', authenticateToken, (req, res) => {
    const { name, mobile_number } = req.body;
    db.run('INSERT INTO suppliers (name, mobile_number) VALUES (?, ?)', [name, mobile_number], function(err) {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ id: this.lastID, name, mobile_number });
    });
});

app.get('/api/suppliers', (req, res) => {
    db.all('SELECT * FROM suppliers', [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(rows);
    });
});

app.get('/api/notifications', authenticateToken, (req, res) => {
    db.all('SELECT * FROM products WHERE stock <= threshold', [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(rows);
    });
});

// Fallback Route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n=================================`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`=================================\n`);
});
