# 🛒 Smart Retail POS & AI Demand Prediction System

A lightweight, full-stack Point of Sale (POS) and intelligent inventory management platform designed for retail and grocery operations. The platform integrates real-time billing, automatic stock tracking, direct supplier communications, and 6-month predictive demand analytics powered by an SQLite backend.

---

## 🌟 Key Features

* **Point of Sale (POS) & Billing:** High-speed counter checkout, automatic totals calculation, and immediate stock synchronization.
* **Real-Time Stock Management:** Live inventory tracking with automatic depletion upon checkout and low-stock indicators.
* **AI Demand Forecasting:**
  * Analyzes historical product velocity directly from the SQLite database.
  * Projects stock-out timelines and reorder thresholds for every active product.
  * Interactive 6-month historical and predicted demand bar chart visualization.
* **Wholesaler & Supplier Integration:**
  * Dedicated wholesaler ordering portal.
  * One-click dynamic order dispatch via **WhatsApp** and **SMS** routed to the selected supplier's contact number.
* **Role-Based Authentication:** Session control for shopkeepers and suppliers.

---

## 🛠️ Tech Stack

* **Frontend:** Vanilla JavaScript / React, HTML5, Modern CSS, Responsive Bottom Navigation
* **Backend:** Node.js, Express.js
* **Database:** SQLite3
* **Integrations:** Direct WhatsApp API, SMS Gateway endpoints

---

## 📁 Repository Structure

```text
├── server.js              # Express API server, SQLite database setup, & prediction endpoints
├── app.js                 # Core frontend logic, tab navigation, & chart rendering
├── index.html             # Application entry point
├── styles.css             # UI styling & responsive design
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
