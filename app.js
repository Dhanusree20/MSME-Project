function safeAddEventListener(id, event, handler) {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener(event, handler);
    } else {
        console.warn(`Element with ID '${id}' not found. Skipping listener safely.`);
    }
}

// ==========================================
// SYSTEM STATE & INITIAL PRODUCTS
// ==========================================

const WHOLESALER_PHONE = "919876543210";

const INITIAL_PRODUCTS = [
    {
        id: "onion",
        nameEn: "Onion",
        nameTa: "வெங்காயம்",
        stock: 25.0,
        unit: "kg",
        price: 40.0,
        threshold: 20.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="55" r="30" fill="#a855f7" />
            <path d="M50,15 C45,35 30,45 30,55 C30,70 50,85 50,85 C50,85 70,70 70,55 C70,45 55,35 50,15 Z" fill="#7e22ce" />
            <path d="M50,10 C48,22 45,26 43,28 M50,10 C52,22 55,26 57,28" stroke="#facc15" stroke-width="3" fill="none" stroke-linecap="round" />
            <ellipse cx="50" cy="83" rx="10" ry="3" fill="#eab308" opacity="0.8" />
        </svg>`
    },
    {
        id: "tomato",
        nameEn: "Tomato",
        nameTa: "தக்காளி",
        stock: 45.0,
        unit: "kg",
        price: 50.0,
        threshold: 20.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="55" r="32" fill="#ef4444" />
            <path d="M50,55 C40,40 30,50 30,60 C30,75 50,85 50,85 C50,85 70,75 70,60 C70,50 60,40 50,55 Z" fill="#dc2626" />
            <path d="M50,23 L45,15 L50,20 L55,15 Z M50,20 L40,21 M50,20 L60,21 M50,20 L50,12" stroke="#22c55e" stroke-width="4" stroke-linecap="round" fill="none" />
        </svg>`
    },
    {
        id: "potato",
        nameEn: "Potato",
        nameTa: "உருளைக்கிழங்கு",
        stock: 18.0,
        unit: "kg",
        price: 30.0,
        threshold: 15.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="55" rx="35" ry="25" fill="#ca8a04" />
            <ellipse cx="48" cy="52" rx="32" ry="22" fill="#eab308" />
            <circle cx="30" cy="48" r="2" fill="#854d0e" />
            <circle cx="65" cy="45" r="2" fill="#854d0e" />
            <circle cx="45" cy="65" r="2" fill="#854d0e" />
            <circle cx="60" cy="62" r="2" fill="#854d0e" />
        </svg>`
    },
    {
        id: "rice",
        nameEn: "Rice Sack",
        nameTa: "அரிசி மூட்டை",
        stock: 120.0,
        unit: "kg",
        price: 60.0,
        threshold: 50.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,35 L70,35 L65,85 L35,85 Z" fill="#eab308" />
            <path d="M30,35 C30,35 40,40 50,35 C60,30 70,35 70,35 L73,28 C73,28 60,30 50,25 C40,20 27,28 27,28 Z" fill="#d97706" />
            <ellipse cx="50" cy="35" rx="20" ry="4" fill="#a16207" />
            <rect x="38" y="48" width="24" height="24" rx="4" fill="#fef08a" />
            <text x="50" y="64" font-size="12" font-weight="900" fill="#a16207" text-anchor="middle">RICE</text>
        </svg>`
    },
    {
        id: "coconut",
        nameEn: "Coconut",
        nameTa: "தேங்காய்",
        stock: 8.0,
        unit: "pieces",
        price: 25.0,
        threshold: 15.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="55" r="28" fill="#78350f" />
            <circle cx="48" cy="53" r="26" fill="#a16207" />
            <circle cx="38" cy="45" r="3" fill="#451a03" />
            <circle cx="50" cy="38" r="3" fill="#451a03" />
            <circle cx="60" cy="48" r="3" fill="#451a03" />
            <path d="M35,62 C40,70 60,70 65,62" stroke="#451a03" stroke-width="2" fill="none" stroke-linecap="round" />
        </svg>`
    },
    {
        id: "garlic",
        nameEn: "Garlic",
        nameTa: "வெள்ளைப் பூண்டு",
        stock: 35.0,
        unit: "kg",
        price: 120.0,
        threshold: 15.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,20 C40,35 32,45 32,60 C32,75 42,85 50,85 C58,85 68,75 68,60 C68,45 60,35 50,20 Z" fill="#f1f5f9" />
            <path d="M50,20 C45,35 44,50 44,85 M50,20 C55,35 56,50 56,85" stroke="#cbd5e1" stroke-width="2" fill="none" />
            <path d="M50,15 L50,20" stroke="#a16207" stroke-width="3" stroke-linecap="round" />
        </svg>`
    },
    {
        id: "ginger",
        nameEn: "Ginger",
        nameTa: "இஞ்சி",
        stock: 25.0,
        unit: "kg",
        price: 80.0,
        threshold: 10.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="30" width="20" height="40" rx="10" fill="#eab308" transform="rotate(15 50 50)" />
            <rect x="30" y="45" width="16" height="30" rx="8" fill="#ca8a04" transform="rotate(-30 38 60)" />
            <rect x="52" y="38" width="14" height="25" rx="7" fill="#eab308" transform="rotate(45 59 50)" />
            <path d="M45,35 C42,45 42,55 45,65" stroke="#a16207" stroke-width="2" fill="none" opacity="0.4" />
        </svg>`
    },
    {
        id: "turmeric_pwd",
        nameEn: "Turmeric Powder",
        nameTa: "மஞ்சள் தூள்",
        stock: 60.0,
        unit: "pack",
        price: 45.0,
        threshold: 20.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,25 L75,25 L70,85 L30,85 Z" fill="#eab308" />
            <rect x="35" y="40" width="30" height="30" rx="3" fill="#facc15" />
            <text x="50" y="58" font-size="10" font-weight="900" fill="#a16207" text-anchor="middle">HALDI</text>
        </svg>`
    },
    {
        id: "chilli_pwd",
        nameEn: "Chilli Powder",
        nameTa: "மிளகாய் தூள்",
        stock: 50.0,
        unit: "pack",
        price: 55.0,
        threshold: 15.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,25 L75,25 L70,85 L30,85 Z" fill="#dc2626" />
            <rect x="35" y="40" width="30" height="30" rx="3" fill="#ef4444" />
            <text x="50" y="58" font-size="10" font-weight="900" fill="#7f1d1d" text-anchor="middle">CHILLI</text>
        </svg>`
    },
    {
        id: "coriander_pwd",
        nameEn: "Coriander Powder",
        nameTa: "மல்லித் தூள்",
        stock: 45.0,
        unit: "pack",
        price: 40.0,
        threshold: 15.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,25 L75,25 L70,85 L30,85 Z" fill="#15803d" />
            <rect x="35" y="40" width="30" height="30" rx="3" fill="#22c55e" />
            <text x="50" y="58" font-size="9" font-weight="900" fill="#14532d" text-anchor="middle">DHANIYA</text>
        </svg>`
    },
    {
        id: "mustard_seeds",
        nameEn: "Mustard Seeds",
        nameTa: "கடுகு",
        stock: 75.0,
        unit: "pack",
        price: 20.0,
        threshold: 25.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,30 L75,30 L70,85 L30,85 Z" fill="#1e293b" />
            <circle cx="50" cy="55" r="15" fill="#334155" />
            <circle cx="46" cy="52" r="2" fill="#0f172a" />
            <circle cx="52" cy="50" r="1.5" fill="#0f172a" />
            <circle cx="48" cy="58" r="2.5" fill="#0f172a" />
            <circle cx="54" cy="56" r="2" fill="#0f172a" />
        </svg>`
    },
    {
        id: "cumin_seeds",
        nameEn: "Cumin Seeds",
        nameTa: "சீரகம்",
        stock: 80.0,
        unit: "pack",
        price: 35.0,
        threshold: 30.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,30 L75,30 L70,85 L30,85 Z" fill="#78350f" />
            <ellipse cx="50" cy="55" rx="15" ry="10" fill="#a16207" />
            <line x1="42" y1="52" x2="48" y2="52" stroke="#451a03" stroke-width="2" stroke-linecap="round" />
            <line x1="50" y1="55" x2="58" y2="55" stroke="#451a03" stroke-width="2" stroke-linecap="round" />
            <line x1="45" y1="58" x2="52" y2="58" stroke="#451a03" stroke-width="2" stroke-linecap="round" />
        </svg>`
    },
    {
        id: "toor_dal",
        nameEn: "Toor Dal",
        nameTa: "துவரம் பருப்பு",
        stock: 100.0,
        unit: "kg",
        price: 140.0,
        threshold: 30.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,65 C20,80 50,85 50,85 C50,85 80,80 80,65 C80,50 65,45 50,45 C35,45 20,50 20,65 Z" fill="#eab308" />
            <circle cx="40" cy="60" r="3" fill="#facc15" />
            <circle cx="50" cy="58" r="2.5" fill="#facc15" />
            <circle cx="60" cy="62" r="3" fill="#facc15" />
            <circle cx="45" cy="70" r="3.5" fill="#facc15" />
            <circle cx="55" cy="68" r="3" fill="#facc15" />
        </svg>`
    },
    {
        id: "urad_dal",
        nameEn: "Urad Dal",
        nameTa: "உளுத்தம் பருப்பு",
        stock: 90.0,
        unit: "kg",
        price: 130.0,
        threshold: 30.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,65 C20,80 50,85 50,85 C50,85 80,80 80,65 C80,50 65,45 50,45 C35,45 20,50 20,65 Z" fill="#cbd5e1" />
            <circle cx="40" cy="60" r="3" fill="#f8fafc" />
            <circle cx="50" cy="58" r="2.5" fill="#f8fafc" />
            <circle cx="60" cy="62" r="3" fill="#f8fafc" />
            <circle cx="45" cy="70" r="3.5" fill="#f8fafc" />
            <circle cx="55" cy="68" r="3" fill="#f8fafc" />
        </svg>`
    },
    {
        id: "chana_dal",
        nameEn: "Chana Dal",
        nameTa: "கடலைப் பருப்பு",
        stock: 70.0,
        unit: "kg",
        price: 95.0,
        threshold: 20.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,65 C20,80 50,85 50,85 C50,85 80,80 80,65 C80,50 65,45 50,45 C35,45 20,50 20,65 Z" fill="#ca8a04" />
            <circle cx="40" cy="60" r="3" fill="#eab308" />
            <circle cx="50" cy="58" r="2.5" fill="#eab308" />
            <circle cx="60" cy="62" r="3" fill="#eab308" />
            <circle cx="45" cy="70" r="3.5" fill="#eab308" />
            <circle cx="55" cy="68" r="3" fill="#eab308" />
        </svg>`
    },
    {
        id: "wheat_flour",
        nameEn: "Wheat Flour",
        nameTa: "கோதுமை மாவு",
        stock: 40.0,
        unit: "bag",
        price: 220.0,
        threshold: 15.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,35 L70,35 L65,85 L35,85 Z" fill="#fed7aa" />
            <ellipse cx="50" cy="35" rx="20" ry="4" fill="#ea580c" />
            <rect x="38" y="48" width="24" height="24" rx="4" fill="#ffedd5" />
            <text x="50" y="64" font-size="10" font-weight="900" fill="#ea580c" text-anchor="middle">ATTA</text>
        </svg>`
    },
    {
        id: "sugar",
        nameEn: "Sugar",
        nameTa: "சர்க்கரை",
        stock: 150.0,
        unit: "kg",
        price: 45.0,
        threshold: 50.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,35 L75,35 L70,85 L30,85 Z" fill="#e2e8f0" />
            <rect x="38" y="48" width="24" height="24" rx="4" fill="#f8fafc" />
            <text x="50" y="64" font-size="8" font-weight="900" fill="#475569" text-anchor="middle">SUGAR</text>
        </svg>`
    },
    {
        id: "jaggery",
        nameEn: "Jaggery Blocks",
        nameTa: "வெல்லம்",
        stock: 50.0,
        unit: "kg",
        price: 70.0,
        threshold: 15.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="35" y="40" width="30" height="30" rx="5" fill="#78350f" />
            <rect x="42" y="47" width="16" height="16" rx="2" fill="#a16207" />
        </svg>`
    },
    {
        id: "sunflower_oil",
        nameEn: "Sunflower Oil",
        nameTa: "சூரியகாந்தி எண்ணெய்",
        stock: 80.0,
        unit: "pouch",
        price: 135.0,
        threshold: 25.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="35" y="25" width="30" height="60" rx="8" fill="#fef08a" />
            <circle cx="50" cy="55" r="10" fill="#eab308" />
            <circle cx="50" cy="55" r="5" fill="#ea580c" />
        </svg>`
    },
    {
        id: "coconut_oil",
        nameEn: "Coconut Oil",
        nameTa: "தேங்காய் எண்ணெய்",
        stock: 45.0,
        unit: "bottle",
        price: 160.0,
        threshold: 12.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M40,25 L60,25 L62,85 L38,85 Z" fill="#cbd5e1" />
            <rect x="44" y="15" width="12" height="10" fill="#15803d" />
            <rect x="42" y="45" width="16" height="24" rx="2" fill="#166534" />
            <text x="50" y="60" font-size="8" font-weight="900" fill="#ffffff" text-anchor="middle">COCO</text>
        </svg>`
    },
    {
        id: "ghee",
        nameEn: "Cow Ghee",
        nameTa: "நெய்",
        stock: 30.0,
        unit: "jar",
        price: 180.0,
        threshold: 10.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M35,35 L65,35 L60,80 L40,80 Z" fill="#fef08a" />
            <ellipse cx="50" cy="35" rx="15" ry="5" fill="#ca8a04" />
            <rect x="42" y="45" width="16" height="20" fill="#eab308" />
            <text x="50" y="58" font-size="7" font-weight="900" fill="#78350f" text-anchor="middle">GHEE</text>
        </svg>`
    },
    {
        id: "salt",
        nameEn: "Salt",
        nameTa: "உப்பு",
        stock: 120.0,
        unit: "pack",
        price: 20.0,
        threshold: 40.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,25 L75,25 L70,85 L30,85 Z" fill="#cbd5e1" />
            <rect x="35" y="40" width="30" height="30" rx="3" fill="#e2e8f0" />
            <text x="50" y="58" font-size="10" font-weight="900" fill="#475569" text-anchor="middle">SALT</text>
        </svg>`
    },
    {
        id: "tea_leaves",
        nameEn: "Tea Leaves",
        nameTa: "தேயிலை",
        stock: 55.0,
        unit: "pack",
        price: 95.0,
        threshold: 18.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,25 L75,25 L70,85 L30,85 Z" fill="#15803d" />
            <rect x="35" y="40" width="30" height="30" rx="3" fill="#166534" />
            <text x="50" y="58" font-size="10" font-weight="900" fill="#facc15" text-anchor="middle">TEA</text>
        </svg>`
    },
    {
        id: "coffee_powder",
        nameEn: "Coffee Powder",
        nameTa: "காபி தூள்",
        stock: 40.0,
        unit: "pack",
        price: 140.0,
        threshold: 12.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M25,25 L75,25 L70,85 L30,85 Z" fill="#78350f" />
            <rect x="35" y="40" width="30" height="30" rx="3" fill="#451a03" />
            <text x="50" y="58" font-size="9" font-weight="900" fill="#facc15" text-anchor="middle">COFFEE</text>
        </svg>`
    },
    {
        id: "tamarind",
        nameEn: "Tamarind",
        nameTa: "புளி",
        stock: 50.0,
        unit: "block",
        price: 75.0,
        threshold: 15.0,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="40" height="30" rx="8" fill="#78350f" />
            <rect x="35" y="45" width="30" height="20" rx="4" fill="#451a03" />
        </svg>`
    }
];

const WHOLESALERS = [
    {
        id: "arumugam",
        name: "Arumugam Wholesale Vegetables",
        phone: "+919876543210",
        location: "Koyambedu Market, Chennai",
        supplies: ["onion", "tomato", "potato"]
    },
    {
        id: "shanmugam",
        name: "Shanmugam Grocery Depot",
        phone: "+919988776655",
        location: "George Town, Chennai",
        supplies: ["rice", "coconut"]
    }
];

// Initialize State
let currentLang = "en"; // "en" or "ta"
let products = JSON.parse(localStorage.getItem("products_db")) || INITIAL_PRODUCTS;

// Upgrade loader: ensure all INITIAL_PRODUCTS exist in the active products list
let upgraded = false;
for (const initialItem of INITIAL_PRODUCTS) {
    if (!products.some(p => p.id === initialItem.id)) {
        products.push(initialItem);
        upgraded = true;
    }
}
if (upgraded) {
    localStorage.setItem("products_db", JSON.stringify(products));
}

let cart = {};
let currentDraftedItems = [];
let transactionHistory = JSON.parse(localStorage.getItem("sales_history_db")) || [];
let userSelectedForOrder = new Set(JSON.parse(localStorage.getItem("user_selected_order_items")) || []);

function toggleOrderSelection(productId) {
    if (userSelectedForOrder.has(productId)) {
        userSelectedForOrder.delete(productId);
    } else {
        userSelectedForOrder.add(productId);
    }
    localStorage.setItem("user_selected_order_items", JSON.stringify(Array.from(userSelectedForOrder)));
    draftWholesalerOrder();
}
window.toggleOrderSelection = toggleOrderSelection;
let mediaRecorder = null;
let audioChunks = [];
let recordedAudioBase64 = null;
let voiceRecordTimer = null;
let voiceRecordSeconds = 0;
let shouldSpeakResponse = false;

// Save stock updates
function saveDB() {
    localStorage.setItem("products_db", JSON.stringify(products));
}

// ==========================================
// BILINGUAL TRANSLATION DICTIONARY
// ==========================================

const TRANSLATIONS = {
    en: {
        header_title: "Maligai Manager",
        header_subtitle: "Smart Shop Assistant",
        cart_title: "Active Bill (நடப்பு பில்)",
        clear_bill: "Clear (நீக்கு)",
        empty_cart_msg: "No items added to bill yet. Click on products below!",
        total_items: "Total Items:",
        total_amount: "Total Amount:",
        confirm_bill: "CONFIRM BILL ➔",
        shelf_title: "Product Shelf (கடை பொருட்கள்)",
        shelf_instruction: "Tap photo to add to bill",
        inventory_title: "Store Stock (சரக்கு இருப்பு)",
        legend_good: "Good Stock",
        legend_warning: "Low Stock",
        legend_critical: "Critically Low",
        tbl_product: "Product",
        tbl_stock: "Current Stock",
        tbl_price: "Selling Price",
        tbl_status: "Status",
        tbl_action: "Action",
        predictions_title: "Next 7 Days Sales Forecast",
        predictions_desc: "AI analysis of the last 6 months of sales logs predicts these weekly demand patterns.",
        bot_name: "Udhavi Thambi (உதவி தம்பி)",
        bot_status: "Online Assistant",
        bot_suggestions: "Quick Questions (கேள்விகள்):",
        btn_speak: "Speak Voice",
        btn_send: "Send",
        wholesaler_title: "Wholesaler Ordering Portal",
        select_wholesaler: "Select Supplier / wholesale shop:",
        order_drafter_title: "Auto-Generated Order Ticket",
        record_voice: "Record Voice Order",
        sim_logs_title: "Communication Logs",
        no_activity: "No orders sent out yet.",
        nav_billing: "Billing",
        nav_inventory: "Stock Status",
        nav_prediction: "AI predictions",
        nav_chatbot: "AI Chatbot",
        nav_wholesaler: "Wholesaler",
        // Dashboard & Theme Translate elements
        nav_dashboard: "Dashboard",
        dash_billing_title: "Billing & Sales Summary",
        dash_today_revenue_label: "Today's Revenue",
        dash_total_bills_label: "Total Bills",
        dash_recent_sales_title: "Recent Sales",
        dash_go_billing_btn: "Go to Billing Tab ➔",
        dash_stock_title: "Stock & Inventory",
        dash_total_items_label: "Total Items",
        dash_low_stock_label: "Low Stock Warning",
        dash_critical_items_title: "Critical Reorder Items",
        dash_go_stock_btn: "Go to Stock Status ➔",
        theme_light: "☀️ Light",
        theme_dark: "🌙 Dark",
        // Dynamic labels used in rendering
        unit_kg: "kg",
        unit_pieces: "pieces",
        unit_pack: "pack",
        unit_bag: "bag",
        unit_pouch: "pouch",
        unit_bottle: "bottle",
        unit_jar: "jar",
        unit_block: "block",
        status_good: "Good",
        status_warning: "Warning",
        status_critical: "Reorder Now",
        forecast_high: "High Demand Expected 📈",
        forecast_stable: "Normal Demand Expected ➡️",
        forecast_low: "Low Demand Expected 📉",
        recommend_order: "Order recommendation",
        recommend_ok: "Stock is safe. No order needed.",
        chat_welcome: "Vanakkam! I am Udhavi Thambi, your shop helper. Ask me about stock details, prices, or orders.",
        chat_placeholder: "Type message or ask about stock...",
        record_voice_active: "Recording Voice Order...",
        place_wholesale_order: "Place Wholesale Order (In-App) 📦",
        recent_wholesale_orders_title: "Recent Wholesale Orders",
        tbl_order_id: "Order ID",
        tbl_order_item: "Item Name",
        tbl_order_qty: "Quantity",
        tbl_wholesaler: "Supplier",
        tbl_date: "Order Date",
        tbl_order_status: "Status",
        tbl_order_action: "Action",
        no_wholesale_orders: "No recent wholesale orders found.",
        btn_add_supplier_trigger: "➕ Add Supplier",
        tbl_select: "Select",
        lbl_voice_preview: "Audio Preview:",
        send_order_whatsapp: "Send Order via WhatsApp 💬",
        nav_wholesaler_dash: "Supplier Portal",
        wholesaler_dash_title: "Wholesaler Fulfillment Portal",
        incoming_orders_title: "Incoming Wholesale Orders",
        proactive_suggestions_title: "💡 Proactive Stock Replenishment Suggestions",
        proactive_suggestions_desc: "Select shopkeeper low-stock items below to propose order replenishment suggestions directly.",
        tbl_suggest_item: "Product",
        tbl_suggest_current: "Current Stock / Min",
        tbl_suggest_qty: "Propose Quantity",
        tbl_suggest_action: "Action",
        supplier_suggestions_title: "💡 Proactive Replenishment Suggestions",
        tbl_suggest_by_supplier: "Supplier",
        tbl_suggest_prod: "Suggested Product",
        tbl_suggest_amount: "Quantity",
        tbl_suggest_op: "Action",
        no_active_suggestions: "No suggestions from suppliers."
    },
    ta: {
        header_title: "மளிகை மேனேஜர்",
        header_subtitle: "ஸ்மார்ட் கடை அசிஸ்டன்ட்",
        cart_title: "நடப்பு பில்",
        clear_bill: "அழி",
        empty_cart_msg: "பில்லில் இன்னும் பொருட்கள் சேர்க்கப்படவில்லை. கீழே உள்ள பொருட்களை கிளிக் செய்யவும்!",
        total_items: "மொத்த பொருட்கள்:",
        total_amount: "மொத்த ரூபாய்:",
        confirm_bill: "பில் ஓகே செய் ➔",
        shelf_title: "கடை சாமான்கள்",
        shelf_instruction: "பொருளை பில்லில் சேர்க்க படத்தை தொடவும்",
        inventory_title: "சரக்கு இருப்பு விவரம்",
        legend_good: "நல்ல ஸ்டாக்",
        legend_warning: "குறைகிறது",
        legend_critical: "உடனே வாங்கவும்",
        tbl_product: "பொருள் பெயர்",
        tbl_stock: "இப்போதைய ஸ்டாக்",
        tbl_price: "விற்பனை விலை",
        tbl_status: "ஸ்டாக் நிலை",
        tbl_action: "செயல்பாடு",
        predictions_title: "வரவிருக்கும் வார வியாபார கணிப்பு",
        predictions_desc: "கடந்த 6 மாத விற்பனையை கணக்கிட்டு, அடுத்த வாரத்திற்கான தேவையை கணினி கணித்துள்ளது.",
        bot_name: "உதவி தம்பி",
        bot_status: "உதவிக்கு தயார்",
        bot_suggestions: "கேள்விகள்:",
        btn_speak: "பேசி கேளுங்கள்",
        btn_send: "அனுப்பு",
        wholesaler_title: "பெரிய கடை ஆர்டர் போர்டல்",
        select_wholesaler: "மொத்த வியாபாரியை தேர்ந்தெடு:",
        order_drafter_title: "தானியங்கி ஆர்டர் சீட்டு",
        record_voice: "ஆர்டர் வாய்ஸ் ரெக்கார்ட்",
        sim_logs_title: "தொடர்பு விவரங்கள்",
        no_activity: "சமீபத்தில் தகவல்கள் ஏதும் அனுப்பப்படவில்லை.",
        nav_billing: "பில் போடுதல்",
        nav_inventory: "சரக்கு இருப்பு",
        nav_prediction: "வியாபார கணிப்பு",
        nav_chatbot: "உதவி தம்பி",
        nav_wholesaler: "மொத்த வியாபாரி",
        // Dashboard & Theme Translate elements
        nav_dashboard: "டேஷ்போர்டு",
        dash_billing_title: "பில் மற்றும் விற்பனை",
        dash_today_revenue_label: "இன்றைய வருமானம்",
        dash_total_bills_label: "மொத்த பில்கள்",
        dash_recent_sales_title: "சமீபத்திய விற்பனை",
        dash_go_billing_btn: "பில் பகுதிக்குச் செல் ➔",
        dash_stock_title: "சரக்கு இருப்பு விவரம்",
        dash_total_items_label: "மொத்த பொருட்கள்",
        dash_low_stock_label: "குறைந்த இருப்பு எச்சரிக்கை",
        dash_critical_items_title: "உடனே ஆர்டர் செய்ய வேண்டியவை",
        dash_go_stock_btn: "இருப்பு விவரத்திற்கு செல் ➔",
        theme_light: "☀️ பகல்",
        theme_dark: "🌙 இரவு",
        // Dynamic labels
        unit_kg: "கிலோ",
        unit_pieces: "எண்ணிக்கை",
        unit_pack: "பாக்கெட்",
        unit_bag: "மூட்டை",
        unit_pouch: "பாக்கெட்",
        unit_bottle: "பாட்டில்",
        unit_jar: "ஜாடி",
        unit_block: "கட்டி",
        status_good: "போதுமானது",
        status_warning: "குறைவாக உள்ளது",
        status_critical: "உடனே வாங்குக!",
        forecast_high: "அதிக விற்பனை எதிர்பார்க்கப்படுகிறது 📈",
        forecast_stable: "சாதாரண விற்பனை எதிர்பார்க்கப்படுகிறது ➡️",
        forecast_low: "குறைவான விற்பனை எதிர்பார்க்கப்படுகிறது 📉",
        recommend_order: "ஆர்டர் செய்ய வேண்டிய அளவு",
        recommend_ok: "ஸ்டாக் போதுமானது. ஆர்டர் தேவையில்லை.",
        chat_welcome: "வணக்கம்! நான் உங்கள் உதவி தம்பி. சாமான்கள் இருப்பு, விலை அல்லது ஆர்டர் பற்றி என்னிடம் கேளுங்கள்.",
        chat_placeholder: "பொருளின் இருப்பு அல்லது விலையை கேட்க எழுதவும்...",
        record_voice_active: "வாய்ஸ் ஆர்டர் பதிவாகிறது...",
        place_wholesale_order: "உள்-செயலி ஆர்டர் செய்க (In-App) 📦",
        recent_wholesale_orders_title: "சமீபத்திய மொத்த ஆர்டர்கள்",
        tbl_order_id: "ஆர்டர் ID",
        tbl_order_item: "பொருள் பெயர்",
        tbl_order_qty: "அளவு",
        tbl_wholesaler: "மொத்த வியாபாரி",
        tbl_date: "ஆர்டர் தேதி",
        tbl_order_status: "நிலை",
        tbl_order_action: "செயல்பாடு",
        no_wholesale_orders: "சமீபத்திய மொத்த ஆர்டர்கள் ஏதும் இல்லை.",
        btn_add_supplier_trigger: "➕ வியாபாரியை சேர்",
        tbl_select: "தேர்வு",
        lbl_voice_preview: "ஒலி முன்னோட்டம்:",
        send_order_whatsapp: "வாட்ஸ்அப் வழியாக ஆர்டர் செய்க 💬",
        nav_wholesaler_dash: "சப்ளையர் போர்டல்",
        wholesaler_dash_title: "வழங்குநர் ஆர்டர் போர்டல்",
        incoming_orders_title: "வரவிருக்கும் மொத்த ஆர்டர்கள்",
        proactive_suggestions_title: "💡 கடை சரக்கு மறுசீரமைப்பு பரிந்துரைகள்",
        proactive_suggestions_desc: "சில்லறை கடைக்காரருக்கு உடனடியாக ஆர்டர் பரிந்துரைகளை அனுப்ப கீழே உள்ள குறைந்த இருப்பு பொருட்களை தேர்வு செய்யவும்.",
        tbl_suggest_item: "பொருள் பெயர்",
        tbl_suggest_current: "தற்போதைய சரக்கு / குறைந்தபட்ச அளவு",
        tbl_suggest_qty: "பரிந்துரைக்கப்படும் அளவு",
        tbl_suggest_action: "செயல்பாடு",
        supplier_suggestions_title: "💡 சப்ளையர் பரிந்துரைகள்",
        tbl_suggest_by_supplier: "சப்ளையர் பெயர்",
        tbl_suggest_prod: "பரிந்துரைக்கப்படும் பொருள்",
        tbl_suggest_amount: "அளவு",
        tbl_suggest_op: "செயல்பாடு",
        no_active_suggestions: "சப்ளையர்களிடமிருந்து பரிந்துரைகள் ஏதும் இல்லை."
    }
};

// Toggle Language and Translate UI
function toggleLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[id]").forEach(el => {
        const key = el.id;
        if (TRANSLATIONS[currentLang][key]) {
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = TRANSLATIONS[currentLang][key];
            } else {
                // If it contains a button with nested structure, handle carefully
                if (key === "confirm-bill-btn") {
                    el.innerHTML = TRANSLATIONS[currentLang].confirm_bill;
                } else if (key === "voice-input-btn") {
                    el.innerHTML = `🎤 <span class="mic-label">${TRANSLATIONS[currentLang].btn_speak}</span>`;
                } else if (key === "voice-record-btn") {
                    el.innerHTML = `🔴 <span id="record_voice">${TRANSLATIONS[currentLang].record_voice}</span>`;
                } else if (key === "place-wholesale-order-btn" || key === "place-wholesale-order-btn-left") {
                    el.innerHTML = TRANSLATIONS[currentLang].place_wholesale_order;
                } else if (key === "send-order-btn" || key === "send-order-btn-left") {
                    el.innerHTML = TRANSLATIONS[currentLang].send_order_whatsapp;
                } else if (key === "btn-add-supplier-trigger") {
                    el.innerHTML = TRANSLATIONS[currentLang].btn_add_supplier_trigger;
                } else {
                    el.textContent = TRANSLATIONS[currentLang][key];
                }
            }
        }
    });

    // Translate active tab highlights
    document.getElementById("lang-label-en").classList.toggle("active", currentLang === "en");
    document.getElementById("lang-label-ta").classList.toggle("active", currentLang === "ta");

    // Redraw dynamically generated items
    if (document.getElementById("tab-dashboard").classList.contains("active")) {
        renderDashboard();
    }
    renderProductShelf();
    renderInventoryTable();
    renderPredictions();
    initForecastChart();
    renderChatSuggestions();
    updateWholesalerList();
    draftWholesalerOrder();
    renderWholesaleOrdersTable();
}

// Set up UI language switch event
safeAddEventListener("lang-toggle-checkbox", "change", function (e) {
    const selected = e.target.checked ? "ta" : "en";
    toggleLanguage(selected);
});

// ==========================================
// SOUND EFFECT GENERATOR (WEB AUDIO API)
// ==========================================

function playCashRegisterSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        // Pitch 1: High beep
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
        gain1.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc1.start();
        osc1.stop(audioCtx.currentTime + 0.15);

        // Pitch 2: Higher follow-up chime (simulates register bell)
        setTimeout(() => {
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1320, audioCtx.currentTime); // E6
            gain2.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.start();
            osc2.stop(audioCtx.currentTime + 0.3);
        }, 80);
    } catch (e) {
        console.warn("Audio Context not supported or allowed by policy yet.", e);
    }
}

// ==========================================
// HISTORICAL SALES DATA SEEDER (6 MONTHS)
// ==========================================

function seedSalesHistory() {
    if (transactionHistory.length > 0) return;

    const history = [];
    const now = new Date();

    // Generate 180 days of daily sales records
    for (let i = 180; i >= 1; i--) {
        const date = new Date();
        date.setDate(now.getDate() - i);

        const dayOfWeek = date.getDay(); // 0 = Sun, 6 = Sat

        products.forEach(p => {
            let baseDailySale = 0;
            let seasonalMultiplier = 1.0;

            // Define product specific volumes
            if (p.id === "onion") {
                baseDailySale = 8.0; // kg
                if (dayOfWeek === 0 || dayOfWeek === 6 || dayOfWeek === 5) {
                    seasonalMultiplier = 1.6; // Weekend rush for onions (biryani/curry cooking)
                }
            } else if (p.id === "tomato") {
                baseDailySale = 12.0; // kg
                if (dayOfWeek === 0 || dayOfWeek === 6) {
                    seasonalMultiplier = 1.8;
                }
            } else if (p.id === "potato") {
                baseDailySale = 5.0; // kg
                if (dayOfWeek === 3 || dayOfWeek === 0) {
                    seasonalMultiplier = 1.4; // Mid-week & Sunday bump
                }
            } else if (p.id === "rice") {
                baseDailySale = 25.0; // kg
                if (dayOfWeek === 5 || dayOfWeek === 6) {
                    seasonalMultiplier = 1.5; // Grocery shopping days (Fri/Sat)
                }
            } else if (p.id === "coconut") {
                baseDailySale = 3.0; // units
                if (dayOfWeek === 2 || dayOfWeek === 5 || dayOfWeek === 0) {
                    seasonalMultiplier = 2.0; // Tuesday/Friday/Sunday temples & cooking
                }
            }

            // Trend component: slow rise in sales over 6 months
            const trendModifier = 0.9 + ((180 - i) / 180) * 0.2; // 0.9 to 1.1

            // Random noise (+/- 25%)
            const noise = 0.85 + Math.random() * 0.3;

            const unitsSold = parseFloat((baseDailySale * seasonalMultiplier * trendModifier * noise).toFixed(2));

            history.push({
                productId: p.id,
                date: date.toISOString().split('T')[0],
                quantity: unitsSold,
                revenue: unitsSold * p.price
            });
        });
    }

    transactionHistory = history;
    localStorage.setItem("sales_history_db", JSON.stringify(transactionHistory));
}

// Initialize historical dataset
seedSalesHistory();

// ==========================================
// AI DEMAND PREDICTION ENGINE (NEXT 7 DAYS)
// ==========================================

function get7DayPrediction(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return { forecast: "stable", quantity: 0, recommend: 0 };

    // Filter transaction history for this product
    const logs = transactionHistory.filter(log => log.productId === productId);
    if (logs.length === 0) return { forecast: "stable", quantity: 0, recommend: 0 };

    // Calculate long-term average daily sale (180 days)
    const totalSales6Months = logs.reduce((sum, log) => sum + log.quantity, 0);
    const avgDaily6Months = totalSales6Months / 180;

    // Calculate recent daily average (last 14 days)
    const recentLogs = logs.slice(-14);
    const totalSales14Days = recentLogs.reduce((sum, log) => sum + log.quantity, 0);
    const avgDailyRecent = totalSales14Days / 14;

    // Calculate trend coefficient
    const trendCoeff = avgDaily6Months > 0 ? (avgDailyRecent / avgDaily6Months) : 1.0;

    // Compute expected sales for the next 7 days, factoring in day-of-week weights
    // (Simulate forecasting by taking current base trend and looking at upcoming week)
    let predictedSales = 0;
    const now = new Date();

    for (let day = 1; day <= 7; day++) {
        const forecastDate = new Date();
        forecastDate.setDate(now.getDate() + day);
        const dayOfWeek = forecastDate.getDay();

        // Seasonal weight from historical logs for this specific day-of-week
        const dowLogs = logs.filter(log => new Date(log.date).getDay() === dayOfWeek);
        const dowAvg = dowLogs.reduce((sum, log) => sum + log.quantity, 0) / dowLogs.length;

        // Blended forecast: 70% Day-of-week pattern adjusted by trend, 30% recent average
        const dailyForecast = (0.7 * dowAvg * trendCoeff) + (0.3 * avgDailyRecent);
        predictedSales += dailyForecast;
    }

    predictedSales = parseFloat(predictedSales.toFixed(1));

    // Determine status
    let forecastStatus = "stable";
    if (trendCoeff > 1.08) {
        forecastStatus = "high";
    } else if (trendCoeff < 0.92) {
        forecastStatus = "low";
    }

    // Recommendation ordering quantity
    const safetyStock = product.threshold;
    const stockShortfall = (predictedSales + safetyStock) - product.stock;
    const recommendOrder = stockShortfall > 0 ? Math.ceil(stockShortfall) : 0;

    return {
        forecast: forecastStatus,
        quantity: predictedSales,
        recommend: recommendOrder
    };
}

// ==========================================
// BILLING & CART LOGIC
// ==========================================

function updateCartTotals() {
    let totalQty = 0;
    let totalPrice = 0;

    const cartItemsContainer = document.getElementById("cart-items-list");
    cartItemsContainer.innerHTML = "";

    const cartKeys = Object.keys(cart);

    if (cartKeys.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart-message">${TRANSLATIONS[currentLang].empty_cart_msg}</div>`;
    } else {
        cartKeys.forEach(pId => {
            const product = products.find(p => p.id === pId);
            const qty = cart[pId];
            const itemTotal = product.price * qty;

            totalQty += qty;
            totalPrice += itemTotal;

            const itemRow = document.createElement("div");
            itemRow.className = "cart-item-row";
            itemRow.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-title">${currentLang === "en" ? product.nameEn : product.nameTa}</span>
                    <span class="cart-item-meta">₹${product.price} x ${qty} ${currentLang === "en" ? product.unit : TRANSLATIONS[currentLang]["unit_" + product.unit]}</span>
                </div>
                <div class="cart-item-actions">
                    <span class="cart-item-price">₹${itemTotal}</span>
                    <button class="btn-stepper" onclick="adjustCartQty('${pId}', -1)">-</button>
                    <button class="btn-stepper" onclick="adjustCartQty('${pId}', 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemRow);
        });
    }

    document.getElementById("total-qty").textContent = totalQty;
    document.getElementById("total-price").textContent = totalPrice;
    document.getElementById("cart-count").textContent = totalQty;
}

function adjustCartQty(productId, delta) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const currentInCart = cart[productId] || 0;
    const newQty = currentInCart + delta;

    if (newQty <= 0) {
        delete cart[productId];
    } else {
        // Enforce stock ceiling constraint
        if (newQty > product.stock) {
            alert(currentLang === "en" ?
                `Only ${product.stock} ${product.unit} of ${product.nameEn} in stock!` :
                `${product.nameTa} சரக்கு ${product.stock} ${TRANSLATIONS[currentLang]["unit_" + product.unit]} தான் உள்ளது!`);
            return;
        }
        cart[productId] = newQty;
    }

    updateCartTotals();
    renderProductShelf(); // Re-render steppers on cards
}

// Add directly from card tap
function addToCartDirect(productId) {
    adjustCartQty(productId, 1);
}

function clearCart() {
    cart = {};
    updateCartTotals();
    renderProductShelf();
}

safeAddEventListener("clear-cart-btn", "click", clearCart);

// Confirm bill checkout
safeAddEventListener("confirm-bill-btn", "click", function () {
    const cartKeys = Object.keys(cart);
    if (cartKeys.length === 0) return;

    const billId = "BILL-" + Date.now();
    const todayDate = new Date().toISOString().split('T')[0];

    // Deduct stock
    cartKeys.forEach(pId => {
        const product = products.find(p => p.id === pId);
        const qty = cart[pId];

        // Log transaction to history
        transactionHistory.push({
            billId: billId,
            productId: pId,
            date: todayDate,
            quantity: qty,
            revenue: qty * product.price
        });

        product.stock = parseFloat((product.stock - qty).toFixed(2));
        if (product.stock <= 15) {
            triggerWhatsAppAlert(product.id, product.stock);
        }
    });

    // Save logs and db
    saveDB();
    localStorage.setItem("sales_history_db", JSON.stringify(transactionHistory));

    // Play register chime sound
    playCashRegisterSound();

    // Success notification UI flash
    const confirmBtn = document.getElementById("confirm-bill-btn");
    const originalText = confirmBtn.innerHTML;
    confirmBtn.style.backgroundColor = "var(--color-success-hover)";
    confirmBtn.innerHTML = currentLang === "en" ? "SUCCESSFUL BILL! ✓" : "பில் ஓகே செய்யப்பட்டது! ✓";

    setTimeout(() => {
        confirmBtn.style.backgroundColor = "";
        confirmBtn.innerHTML = originalText;
    }, 1500);

    // Reset Cart
    cart = {};
    updateCartTotals();

    // Refresh modules
    renderDashboard();
    renderProductShelf();
    renderInventoryTable();
    renderPredictions();
    draftWholesalerOrder();

    // Auto-alert if items drop low
    checkStockAlerts();
});

// Post-checkout automated checks
function checkStockAlerts() {
    let alertProducts = [];
    products.forEach(p => {
        if (p.stock <= p.threshold) {
            alertProducts.push(currentLang === "en" ? p.nameEn : p.nameTa);
        }
    });

    if (alertProducts.length > 0) {
        // Trigger bot alert
        const listStr = alertProducts.join(", ");
        setTimeout(() => {
            const warningMsg = currentLang === "en" ?
                `⚠️ Warning: Stock of [ ${listStr} ] is very low. Please check predictions and order from wholesaler.` :
                `⚠️ எச்சரிக்கை: [ ${listStr} ] சாமான்கள் இருப்பு மிகக் குறைவாக உள்ளது. வரவிருக்கும் ஆர்டரை சரிபார்க்கவும்.`;

            addBotMessage(warningMsg);
        }, 1200);
    }
}

// ==========================================
// RENDER COMPONENTS LOGIC
// ==========================================

function getStockStatusClass(product) {
    if (product.stock <= product.threshold / 2) {
        return "critical";
    } else if (product.stock <= product.threshold) {
        return "warning";
    } else {
        return "good";
    }
}

// Card grid rendering
function renderProductShelf() {
    const grid = document.getElementById("product-grid-container");
    grid.innerHTML = "";

    products.forEach(p => {
        const inCart = cart[p.id] || 0;
        const statusClass = getStockStatusClass(p);

        let badgeText = "";
        if (statusClass === "critical") badgeText = TRANSLATIONS[currentLang].status_critical;
        else if (statusClass === "warning") badgeText = TRANSLATIONS[currentLang].status_warning;
        else badgeText = TRANSLATIONS[currentLang].status_good;

        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-card-visual" onclick="addToCartDirect('${p.id}')">
                ${p.svg}
                <span class="product-stock-badge badge-${statusClass}">${p.stock} ${currentLang === "en" ? p.unit : TRANSLATIONS[currentLang]["unit_" + p.unit]} (${badgeText})</span>
            </div>
            <div class="product-card-info" onclick="addToCartDirect('${p.id}')">
                <span class="product-name-en">${p.nameEn}</span>
                <span class="product-name-ta">${p.nameTa}</span>
                <span class="product-price">₹${p.price}</span>
            </div>
            <div class="product-card-actions">
                <span class="form-label">${currentLang === "en" ? "Bill Qty:" : "பில் அளவு:"}</span>
                <div class="stepper">
                    <button class="btn-stepper" onclick="adjustCartQty('${p.id}', -1)">-</button>
                    <span class="stepper-value">${inCart}</span>
                    <button class="btn-stepper" onclick="adjustCartQty('${p.id}', 1)">+</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Inventory page rendering
function renderInventoryTable() {
    const tbody = document.getElementById("inventory-table-body");
    tbody.innerHTML = "";

    products.forEach(p => {
        const statusClass = getStockStatusClass(p);
        let badgeText = "";
        let dotColor = "green";

        if (statusClass === "critical") {
            badgeText = TRANSLATIONS[currentLang].status_critical;
            dotColor = "red";
        } else if (statusClass === "warning") {
            badgeText = TRANSLATIONS[currentLang].status_warning;
            dotColor = "yellow";
        } else {
            badgeText = TRANSLATIONS[currentLang].status_good;
            dotColor = "green";
        }

        const tr = document.createElement("tr");
        tr.className = `status-${statusClass}`;
        const isChecked = userSelectedForOrder.has(p.id) ? "checked" : "";
        tr.innerHTML = `
            <td style="text-align: center; vertical-align: middle;">
                <input type="checkbox" class="order-select-checkbox" data-product-id="${p.id}" ${isChecked} onchange="toggleOrderSelection('${p.id}')" style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--color-primary);">
            </td>
            <td>
                <div class="inventory-prod-cell">
                    <div class="inventory-prod-icon status-${statusClass}">
                        ${p.svg}
                        <span class="status-indicator-dot ${dotColor}"></span>
                    </div>
                    <div class="inventory-prod-details">
                        <h4>${currentLang === "en" ? p.nameEn : p.nameTa}</h4>
                        <p>${p.id.toUpperCase()}</p>
                    </div>
                </div>
            </td>
            <td><span class="stock-value">${p.stock}</span> ${currentLang === "en" ? p.unit : TRANSLATIONS[currentLang]["unit_" + p.unit]}</td>
            <td>₹${p.price}</td>
            <td>
                <span class="status-pill status-${statusClass}">
                    <span class="status-dot ${dotColor}"></span>
                    ${badgeText}
                </span>
            </td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="quickReorderTrigger('${p.id}')">
                    ${currentLang === "en" ? "Reorder" : "வழங்குநரை பார்"}
                </button>
                <button class="btn btn-success btn-sm" onclick="openAddStockModal('${p.id}')" style="margin-left: 6px;">
                    ➕ ${currentLang === "en" ? "Add Stock" : "சேர்க்கவும்"}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function quickReorderTrigger(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Trigger WhatsApp alert check manually
    triggerWhatsAppAlert(product.id, product.stock);

    // Find supplier
    const supplier = WHOLESALERS.find(w => w.supplies.includes(productId));
    if (supplier) {
        document.getElementById("wholesaler-select").value = supplier.id;
        updateWholesalerList();
    }

    // Direct navigate to Wholesaler Tab
    switchTab("tab-wholesaler");
}

// Prediction page rendering
function renderPredictions() {
    const container = document.getElementById("predictions-list-container");
    container.innerHTML = "";

    products.forEach(p => {
        let dailyUsage = Math.max(1, Math.round((p.threshold || 20) / 7));
        let daysUntilOut = Math.round(p.stock / dailyUsage);
        let stockStatus = daysUntilOut <= 3 ? (currentLang === "en" ? "Critical" : "அபாயம்") : (daysUntilOut <= 7 ? (currentLang === "en" ? "Low" : "குறைவு") : (currentLang === "en" ? "Good" : "நன்று"));
        let statusColor = daysUntilOut <= 3 ? "var(--color-danger)" : (daysUntilOut <= 7 ? "var(--color-warning)" : "var(--color-success)");

        const card = document.createElement("div");
        card.className = "prediction-card";
        card.style.flex = "1 1 calc(50% - 16px)";
        card.innerHTML = `
            <div class="pred-product-info">
                <div class="pred-icon">${p.svg}</div>
                <div class="pred-details">
                    <h3 style="margin: 0; font-size: 16px;">${currentLang === "en" ? p.nameEn : p.nameTa}</h3>
                    <p style="margin: 4px 0 0; font-size: 13px; color: var(--text-secondary);">${currentLang === "en" ? "Current Stock:" : "தற்போதைய இருப்பு:"} <strong>${p.stock} ${currentLang === "en" ? p.unit : TRANSLATIONS[currentLang]["unit_" + p.unit]}</strong></p>
                </div>
            </div>
            
            <div class="pred-trend-visual" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-glass);">
                <div style="display: flex; justify-content: space-between; font-size: 13px;">
                    <span style="color: var(--text-secondary);">${currentLang === "en" ? "Daily Usage Rate:" : "தினசரி பயன்பாடு:"} <strong>${dailyUsage} ${currentLang === "en" ? p.unit : TRANSLATIONS[currentLang]["unit_" + p.unit]}/day</strong></span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 13px; margin-top: 6px;">
                    <span style="color: var(--text-secondary);">${currentLang === "en" ? "Est. Out of Stock:" : "இருப்பு தீரும் நாள்:"}</span>
                    <strong style="color: ${statusColor};">${daysUntilOut} ${currentLang === "en" ? "Days" : "நாட்கள்"} (${stockStatus})</strong>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ==========================================
// AI CHATBOT SYSTEM ("UDHAVI THAMBI")
// ==========================================

const CHAT_SUGGESTIONS = {
    en: [
        "How much Onion is available?",
        "What is the price of Rice?",
        "Which stock is critically low?",
        "How much Tomato will sell next week?"
    ],
    ta: [
        "வெங்காயம் எவ்வளவு ஸ்டாக் இருக்கு?",
        "அரிசி விலை என்ன?",
        "எந்த சாமான் மிகக் குறைவாக உள்ளது?",
        "தக்காளி அடுத்த வாரம் எவ்வளவு விற்கும்?"
    ]
};

function renderChatSuggestions() {
    const list = document.getElementById("chat-suggestions-list");
    list.innerHTML = "";

    CHAT_SUGGESTIONS[currentLang].forEach(s => {
        const btn = document.createElement("button");
        btn.className = "btn-suggestion";
        btn.textContent = s;
        btn.addEventListener("click", () => {
            document.getElementById("chat-text-input").value = s;
            shouldSpeakResponse = false;
            handleUserMessageSubmit();
        });
        list.appendChild(btn);
    });
}

// Initialize Chat Welcome
function initChatWelcome() {
    const bubble = document.getElementById("welcome-message-bubble");
    if (bubble) {
        bubble.textContent = TRANSLATIONS[currentLang].chat_welcome;
    }
}

function addBotMessage(text) {
    const chatLog = document.getElementById("chat-log-container");
    const msg = document.createElement("div");
    msg.className = "chat-message bot";
    msg.innerHTML = `<div class="message-bubble">${text}</div>`;
    chatLog.appendChild(msg);
    chatLog.scrollTop = chatLog.scrollHeight;

    // Trigger Speech synthesis ONLY if the user used voice AI query
    if (shouldSpeakResponse) {
        speakMessageText(text);
        shouldSpeakResponse = false; // Reset flag
    }
}

function addUserMessage(text) {
    const chatLog = document.getElementById("chat-log-container");
    const msg = document.createElement("div");
    msg.className = "chat-message user";
    msg.innerHTML = `<div class="message-bubble">${text}</div>`;
    chatLog.appendChild(msg);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Native Speech output (Accessibility)
function speakMessageText(text) {
    if (!window.speechSynthesis) return;

    // Stop any running speech
    window.speechSynthesis.cancel();

    const cleanText = text.replace(/[^a-zA-Z0-9\sஅ-ஹக-ஹா-ூெ-ொ்]/g, ''); // Strip emojis/icons
    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Detect voices and prefer Tamil for Tamil mode, or default English
    const voices = window.speechSynthesis.getVoices();
    if (currentLang === "ta") {
        const taVoice = voices.find(v => v.lang.includes("TA") || v.lang.includes("ta"));
        if (taVoice) utterance.voice = taVoice;
        utterance.lang = "ta-IN";
    } else {
        const enVoice = voices.find(v => v.lang.includes("EN") || v.lang.includes("en"));
        if (enVoice) utterance.voice = enVoice;
        utterance.lang = "en-US";
    }

    utterance.rate = 0.95; // Speak slightly slower for clarity
    window.speechSynthesis.speak(utterance);
}

// AI NLP Processing Logic (Translates query -> matches response templates)
function processAIQuery(query) {
    const qLower = query.toLowerCase();

    // 1. Identify product mentioned
    let productMatch = null;
    if (qLower.includes("onion") || qLower.includes("வெங்காயம்")) productMatch = products.find(p => p.id === "onion");
    else if (qLower.includes("tomato") || qLower.includes("தக்காளி")) productMatch = products.find(p => p.id === "tomato");
    else if (qLower.includes("potato") || qLower.includes("உருளை") || qLower.includes("கிழங்கு")) productMatch = products.find(p => p.id === "potato");
    else if (qLower.includes("rice") || qLower.includes("அரிசி")) productMatch = products.find(p => p.id === "rice");
    else if (qLower.includes("coconut") || qLower.includes("தேங்காய்")) productMatch = products.find(p => p.id === "coconut");

    // 2. Identify check intent
    const isStockQuery = qLower.includes("stock") || qLower.includes("available") || qLower.includes("எவ்வளவு") || qLower.includes("ஸ்டாக்") || qLower.includes("இருப்பு") || qLower.includes("இருக்கா");
    const isPriceQuery = qLower.includes("price") || qLower.includes("rate") || qLower.includes("cost") || qLower.includes("விலை") || qLower.includes("ரூபாய்") || qLower.includes("மதிப்பு");
    const isLowStockQuery = qLower.includes("low") || qLower.includes("empty") || qLower.includes("critical") || qLower.includes("கம்மி") || qLower.includes("தீர்ந்து");
    const isForecastQuery = qLower.includes("forecast") || qLower.includes("prediction") || qLower.includes("next week") || qLower.includes("விற்கும்") || qLower.includes("கணிப்பு");

    // 3. Response Formulation
    if (productMatch) {
        const pName = currentLang === "en" ? productMatch.nameEn : productMatch.nameTa;
        const pUnit = currentLang === "en" ? productMatch.unit : TRANSLATIONS[currentLang]["unit_" + productMatch.unit];

        if (isPriceQuery) {
            return currentLang === "en" ?
                `Price of 1 ${pUnit} of ${pName} is ₹${productMatch.price}, brother.` :
                `ஒரு ${pUnit} ${pName} விலை ₹${productMatch.price} தம்பி.`;
        }

        if (isForecastQuery) {
            const pred = get7DayPrediction(productMatch.id);
            return currentLang === "en" ?
                `Our AI predicts we will sell ${pred.quantity} ${pUnit} of ${pName} next week. Recommendation is to order ${pred.recommend} ${pUnit}.` :
                `அடுத்த வாரம் ${pred.quantity} ${pUnit} ${pName} விற்பனையாகும் என கணிக்கப்பட்டுள்ளது. நீங்கள் ${pred.recommend} ${pUnit} ஆர்டர் செய்ய பரிந்துரைக்கிறேன்.`;
        }

        // Default stock query
        const isLow = productMatch.stock <= productMatch.threshold;
        if (currentLang === "en") {
            return isLow ?
                `This much stock is only available: [ ${productMatch.stock} ${pUnit} ] of ${pName}. It is running low! Please order from wholesaler.` :
                `${pName} stock is good: [ ${productMatch.stock} ${pUnit} ] is available.`;
        } else {
            return isLow ?
                `வெங்காயம்/சாமான் இவ்வளவு தான் தம்பி இருக்கு: [ ${productMatch.stock} ${pUnit} ] ${pName}. சீக்கிரம் தீர்ந்துவிடும். ஆர்டர் போடுங்க.` :
                `${pName} போதுமான அளவு இருக்கு தம்பி: [ ${productMatch.stock} ${pUnit} ] கையிருப்பில் உள்ளது.`;
        }
    }

    // Checking globally low items
    if (isLowStockQuery) {
        const lowItems = products.filter(p => p.stock <= p.threshold);
        if (lowItems.length === 0) {
            return currentLang === "en" ?
                "All items have sufficient stock, brother!" :
                "எல்லா சாமான்களும் போதுமான அளவு இருக்கு தம்பி! கவலை வேண்டாம்.";
        } else {
            const list = lowItems.map(p => `${currentLang === "en" ? p.nameEn : p.nameTa} (${p.stock})`).join(", ");
            return currentLang === "en" ?
                `These items are low in stock: [ ${list} ]. You should order soon.` :
                `இந்த சாமான்கள் ஸ்டாக் கம்மியா இருக்கு: [ ${list} ]. சீக்கிரம் ஆர்டர் பண்ணுங்க.`;
        }
    }

    // Checking global predictions forecast summary
    if (isForecastQuery) {
        const highDemandList = [];
        products.forEach(p => {
            const pred = get7DayPrediction(p.id);
            if (pred.forecast === "high") {
                highDemandList.push(currentLang === "en" ? p.nameEn : p.nameTa);
            }
        });

        if (highDemandList.length === 0) {
            return currentLang === "en" ?
                "Next week sales look stable for all items." :
                "அடுத்த வாரம் விற்பனை சீராக இருக்கும், சடங்கு மாற்றங்கள் இல்லை தம்பி.";
        } else {
            const list = highDemandList.join(", ");
            return currentLang === "en" ?
                `AI predicts high demand next week for: [ ${list} ]. Make sure to stock up.` :
                `அடுத்த வாரம் [ ${list} ] சாமான்களுக்கு அதிக தேவை இருக்கும். முன்கூட்டியே வாங்கி வைக்கவும்.`;
        }
    }

    // Default conversational responses
    if (qLower.includes("hello") || qLower.includes("hi") || qLower.includes("வணக்கம்") || qLower.includes("நன்றி") || qLower.includes("thanks")) {
        return currentLang === "en" ?
            "Hello! Tell me how I can assist your business today." :
            "வணக்கம் தம்பி! இன்னைக்கு வியாபாரத்திற்கு நான் எப்படி உதவட்டும்?";
    }

    // Generic fallback query response
    return currentLang === "en" ?
        "I didn't quite get that. Ask me things like 'How much onion left?' or 'What will sell next week?'" :
        "சொன்னது புரியவில்லை தம்பி. 'வெங்காயம் ஸ்டாக் எவ்வளவு இருக்கு?' அல்லது 'அடுத்த வாரம் எது அதிகம் விற்கும்?' என கேளுங்கள்.";
}

function handleUserMessageSubmit() {
    const input = document.getElementById("chat-text-input");
    const query = input.value.trim();
    if (!query) return;

    // Display user bubble
    addUserMessage(query);
    input.value = "";

    // Simulate Bot response delay
    setTimeout(() => {
        const botResponse = processAIQuery(query);
        addBotMessage(botResponse);
    }, 600);
}

safeAddEventListener("chat-send-btn", "click", function () {
    shouldSpeakResponse = false;
    handleUserMessageSubmit();
});
safeAddEventListener("chat-text-input", "keydown", function (e) {
    if (e.key === "Enter") {
        shouldSpeakResponse = false;
        handleUserMessageSubmit();
    }
});

// Mock Voice Input Integration (Speech Recognition API)
const voiceBtn = document.getElementById("voice-input-btn");
if (voiceBtn) {
    voiceBtn.addEventListener("click", function () {
        // Prime the browser SpeechSynthesis to ensure audio works on mobile/desktop
        if (window.speechSynthesis) {
            const silentUtterance = new SpeechSynthesisUtterance("");
            window.speechSynthesis.speak(silentUtterance);
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = currentLang === "en" ? "en-US" : "ta-IN";

            recognition.onstart = function () {
                voiceBtn.classList.add("recording");
                voiceBtn.innerHTML = `🎙️ <span class="mic-label">${currentLang === "en" ? "Listening..." : "கேட்கிறது..."}</span>`;
            };

            recognition.onspeechend = function () {
                recognition.stop();
            };

            recognition.onend = function () {
                voiceBtn.classList.remove("recording");
                voiceBtn.innerHTML = `🎤 <span class="mic-label">${TRANSLATIONS[currentLang].btn_speak}</span>`;
            };

            recognition.onresult = function (event) {
                const transcript = event.results[0][0].transcript;
                document.getElementById("chat-text-input").value = transcript;
                shouldSpeakResponse = true;
                handleUserMessageSubmit();
            };

            recognition.onerror = function () {
                recognition.stop();
                simulateVoiceInputFallback();
            };

            recognition.start();
        } else {
            simulateVoiceInputFallback();
        }
    });
}

// Fallback for speech recognition offline/not supported
function simulateVoiceInputFallback() {
    voiceBtn.classList.add("recording");
    voiceBtn.innerHTML = `🎙️ <span class="mic-label">${currentLang === "en" ? "Listening..." : "கேட்கிறது..."}</span>`;

    // Simulate spoken inputs based on what is low stock
    setTimeout(() => {
        voiceBtn.classList.remove("recording");
        voiceBtn.innerHTML = `🎤 <span class="mic-label">${TRANSLATIONS[currentLang].btn_speak}</span>`;

        const spokenOptionsEn = [
            "How much Onion is available?",
            "What is running low?",
            "What should I order?"
        ];
        const spokenOptionsTa = [
            "வெங்காயம் எவ்வளவு ஸ்டாக் இருக்கு?",
            "விலை என்ன?",
            "எந்த பொருள் கம்மியா இருக்கு?"
        ];

        const arr = currentLang === "en" ? spokenOptionsEn : spokenOptionsTa;
        const randomPhrase = arr[Math.floor(Math.random() * arr.length)];

        document.getElementById("chat-text-input").value = randomPhrase;
        shouldSpeakResponse = true;
        handleUserMessageSubmit();
    }, 1500);
}

// ==========================================
// WHOLESALER ORDERING PORTAL
// ==========================================

function updateWholesalerList() {
    const select = document.getElementById("wholesaler-select");
    if (!select) return;
    const currentVal = select.value;
    select.innerHTML = "";

    WHOLESALERS.forEach(w => {
        const option = document.createElement("option");
        option.value = w.id;
        option.textContent = w.name;
        select.appendChild(option);
    });

    // Add inline + Add New Supplier option
    const optionAddNew = document.createElement("option");
    optionAddNew.value = "__ADD_NEW__";
    optionAddNew.textContent = currentLang === "en" ? "+ Add New Supplier" : "+ புதிய வியாபாரியை சேர்";
    select.appendChild(optionAddNew);

    if (currentVal && currentVal !== "__ADD_NEW__") {
        select.value = currentVal;
    } else if (WHOLESALERS.length > 0) {
        select.value = WHOLESALERS[0].id;
    }

    // Trigger details refresh
    renderWholesalerDetails();
}

function renderWholesalerDetails() {
    const select = document.getElementById("wholesaler-select");
    const supplierId = select.value;
    const infoContainer = document.getElementById("supplier-contact-info");

    if (supplierId === "__ADD_NEW__") {
        return;
    }

    const w = WHOLESALERS.find(item => item.id === supplierId);
    if (!w) return;

    // Map supplies items
    const suppliesNames = w.supplies.map(id => {
        const p = products.find(prod => prod.id === id);
        return p ? (currentLang === "en" ? p.nameEn : p.nameTa) : id;
    }).join(", ");

    infoContainer.innerHTML = `
        <div class="supplier-row">
            <span class="supplier-label">${currentLang === "en" ? "Phone:" : "தொலைபேசி:"}</span>
            <span class="supplier-val">${w.phone}</span>
        </div>
        <div class="supplier-row">
            <span class="supplier-label">${currentLang === "en" ? "Location:" : "முகவரி:"}</span>
            <span class="supplier-val">${w.location}</span>
        </div>
        <div class="supplier-row">
            <span class="supplier-label">${currentLang === "en" ? "Supplies Category:" : "வழங்கும் பொருட்கள்:"}</span>
            <span class="supplier-val">${suppliesNames}</span>
        </div>
    `;


    // Re-draft order context
    draftWholesalerOrder();
}


// Auto drafts reorder message containing low stocks/recommendations
function draftWholesalerOrder() {
    const select = document.getElementById("wholesaler-select");
    const supplierId = select.value;
    const w = WHOLESALERS.find(item => item.id === supplierId);
    if (!w) return;

    const textBox = document.getElementById("order-template-box");

    // Formulate line items
    currentDraftedItems = [];
    let lines = [];
    w.supplies.forEach(pId => {
        const product = products.find(p => p.id === pId);
        if (product) {
            const pred = get7DayPrediction(pId);
            const isLowStock = product.stock <= product.threshold;
            const isUserSelected = userSelectedForOrder.has(product.id);

            // If stock is below threshold or manually checked/selected by the user, draft reorder
            if (isLowStock || isUserSelected) {
                let qtyToOrder = pred.recommend > 0 ? pred.recommend : Math.ceil(product.threshold * 2);
                if (qtyToOrder <= 0) {
                    qtyToOrder = Math.ceil(product.threshold * 2) || 20;
                }
                const name = currentLang === "en" ? product.nameEn : product.nameTa;
                const unit = currentLang === "en" ? product.unit : TRANSLATIONS[currentLang]["unit_" + product.unit];
                lines.push(`- ${name}: ${qtyToOrder} ${unit}`);

                // Store in currentDraftedItems for the place wholesale order API calls
                currentDraftedItems.push({
                    productId: pId,
                    itemName: product.nameEn,
                    quantity: qtyToOrder,
                    wholesellerName: w.name
                });
            }
        }
    });

    const shopName = currentLang === "en" ? "Muthaiya Maligai Store" : "முத்தையா மளிகை கடை";

    if (lines.length === 0) {
        textBox.value = currentLang === "en" ?
            `Hello Sir, sending order from ${shopName}.\nAll stock is currently sufficient. Let us know if new stock prices drop.` :
            `வணக்கம் ஐயா, ${shopName} இலிருந்து அனுப்புகிறோம்.\nதற்போது எல்லா சாமான்களும் போதுமான அளவு உள்ளன. புதிய சரக்கு விலை மாற்றங்களை கூறவும்.`;
    } else {
        textBox.value = currentLang === "en" ?
            `Hello Sir, sending order from ${shopName}. Please send these items:\n${lines.join("\n")}\nThank you.` :
            `வணக்கம் ஐயா, ${shopName} இலிருந்து அனுப்புகிறோம். எங்களுக்கு இந்த சாமான்கள் உடனே வேண்டும்:\n${lines.join("\n")}\nநன்றி.`;
    }
}

function generateOrderSummaryMessage() {
    if (!currentDraftedItems || currentDraftedItems.length === 0) {
        return "No items selected.";
    }
    
    let message = "Wholesale Order Summary:\n\n";
    let totalPrice = 0;
    
    currentDraftedItems.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        const price = product ? product.price : 0;
        const itemTotal = price * item.quantity;
        totalPrice += itemTotal;
        
        message += `${item.itemName} - ${item.quantity} x ₹${price} = ₹${itemTotal}\n`;
    });
    
    message += `\nTotal Price: ₹${totalPrice}`;
    return message;
}

// WhatsApp ordering dispatcher
safeAddEventListener("btn-order-whatsapp", "click", function () {
    const select = document.getElementById("wholesaler-select");
    const supplierId = select ? select.value : null;
    const selectedSupplier = WHOLESALERS.find(item => item.id === supplierId);
    const supplierPhone = selectedSupplier?.mobile_number || selectedSupplier?.phone;

    if (!supplierPhone) {
        alert("Please select a valid supplier with a mobile number!");
        return;
    }

    const cleanPhone = supplierPhone.toString().replace(/\D/g, '');
    const msg = generateOrderSummaryMessage();
    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encoded}`;

    // Simulate sending log
    addSimulationLog(
        `💬 Order text dispatched via WhatsApp successfully.`,
        "whatsapp"
    );

    // Open WhatsApp link in new window tab
    window.open(whatsappUrl, "_blank");
});

// SMS ordering dispatcher
safeAddEventListener("btn-order-sms", "click", function () {
    const select = document.getElementById("wholesaler-select");
    const supplierId = select ? select.value : null;
    const selectedSupplier = WHOLESALERS.find(item => item.id === supplierId);
    const supplierPhone = selectedSupplier?.mobile_number || selectedSupplier?.phone;

    if (!supplierPhone) {
        alert("Please select a valid supplier with a mobile number!");
        return;
    }

    const cleanPhone = supplierPhone.toString().replace(/\D/g, '');
    const msg = generateOrderSummaryMessage();
    const encoded = encodeURIComponent(msg);
    const smsUrl = `sms:${cleanPhone}?body=${encoded}`;

    // Simulate sending log
    addSimulationLog(
        `📱 Order text dispatched via SMS successfully.`,
        "whatsapp"
    );

    window.location.href = smsUrl;
});

// Voice order simulation recording toggle
// Voice order audio recorder handlers
function startRecording() {
    audioChunks = [];
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };
            mediaRecorder.onstop = () => {
                const recordedAudioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
                const audioURL = URL.createObjectURL(recordedAudioBlob);

                const player = document.getElementById("voice-preview-player");
                if (player) {
                    player.src = audioURL;
                }
                const previewContainer = document.getElementById("voice-preview-container");
                if (previewContainer) {
                    previewContainer.style.display = "flex";
                }

                // Convert blob to Base64
                const reader = new FileReader();
                reader.onloadend = () => {
                    recordedAudioBase64 = reader.result;
                };
                reader.readAsDataURL(recordedAudioBlob);
            };

            mediaRecorder.start();

            // Update UI buttons
            const recordBtn = document.getElementById("voice-record-btn");
            const stopBtn = document.getElementById("voice-stop-btn");
            const timerLabel = document.getElementById("recording-timer");

            if (recordBtn) {
                recordBtn.classList.add("recording");
                recordBtn.disabled = true;
            }
            if (stopBtn) {
                stopBtn.style.display = "inline-block";
                stopBtn.disabled = false;
            }
            if (timerLabel) {
                timerLabel.classList.add("active");
                timerLabel.textContent = "00:00";
            }

            voiceRecordSeconds = 0;
            clearInterval(voiceRecordTimer);
            voiceRecordTimer = setInterval(() => {
                voiceRecordSeconds++;
                const mins = String(Math.floor(voiceRecordSeconds / 60)).padStart(2, '0');
                const secs = String(voiceRecordSeconds % 60).padStart(2, '0');
                if (timerLabel) {
                    timerLabel.textContent = `${mins}:${secs}`;
                }
            }, 1000);
        })
        .catch(err => {
            console.error("Audio recording failed or permission denied:", err);
            showToast("Microphone permission denied or not supported.");
        });
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
    clearInterval(voiceRecordTimer);

    const recordBtn = document.getElementById("voice-record-btn");
    const stopBtn = document.getElementById("voice-stop-btn");
    const timerLabel = document.getElementById("recording-timer");

    if (recordBtn) {
        recordBtn.classList.remove("recording");
        recordBtn.disabled = false;
    }
    if (stopBtn) {
        stopBtn.style.display = "none";
        stopBtn.disabled = true;
    }
    if (timerLabel) {
        timerLabel.classList.remove("active");
    }
}

// Bind recorders to DOM
safeAddEventListener("voice-record-btn", "click", startRecording);
safeAddEventListener("voice-stop-btn", "click", stopRecording);

function addSimulationLog(text, logType) {
    const container = document.getElementById("simulation-logs-container");

    // Clean empty placeholder
    const emptyLog = document.getElementById("no_activity");
    if (emptyLog) emptyLog.remove();

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const entry = document.createElement("div");
    entry.className = `log-entry ${logType}`;
    entry.innerHTML = `<strong>[${timestamp}]</strong> ${text}`;
    container.insertBefore(entry, container.firstChild);
}

// ==========================================
// SUPPLIER MANAGEMENT SERVICE INTERFACE
// ==========================================

let dbSuppliers = [];

function fetchSuppliers() {
    return fetch('/api/suppliers')
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch suppliers');
            return res.json();
        })
        .then(data => {
            dbSuppliers = data;

            WHOLESALERS.length = 0; // Clear static entries
            data.forEach(item => {
                let supplies = [];
                // Map legacy category lists for seeded suppliers
                if (item.name.includes("Arumugam")) {
                    supplies = ["onion", "tomato", "potato"];
                } else if (item.name.includes("Shanmugam")) {
                    supplies = ["rice", "coconut"];
                } else {
                    // Dynamic suppliers supply all products
                    supplies = products.map(p => p.id);
                }
                WHOLESALERS.push({
                    id: String(item.id),
                    name: item.name,
                    phone: item.mobile_number,
                    location: "Registered Supplier",
                    supplies: supplies
                });
            });

            updateWholesalerList();
        })
        .catch(err => console.error("Error fetching suppliers:", err));
}

function openAddSupplierModal() {
    let modal = document.getElementById("add-supplier-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "add-supplier-modal";
        modal.className = "modal-overlay";
        document.body.appendChild(modal);
    }

    const titleText = currentLang === "en" ? "Add New Supplier" : "புதிய மொத்த வியாபாரியை சேர்க்க";
    const nameLabel = currentLang === "en" ? "Supplier Name:" : "வியாபாரி பெயர்:";
    const mobileLabel = currentLang === "en" ? "Mobile Number:" : "தொலைபேசி எண்:";
    const namePlaceholder = currentLang === "en" ? "e.g. Sri Murugan Wholesalers" : "எ.கா. ஸ்ரீ முருகன் ஹோல்சேல்";
    const mobilePlaceholder = currentLang === "en" ? "e.g. 919876543210" : "எ.கா. 919876543210";
    const saveText = currentLang === "en" ? "Save Supplier" : "சேமி";
    const cancelText = currentLang === "en" ? "Cancel" : "ரத்து செய்";

    modal.innerHTML = `
        <div class="modal-content glass-panel">
            <h3 style="margin-bottom: 16px; font-weight: 700; font-size: 18px; color: var(--text-primary); border-bottom: 1px solid var(--border-glass); padding-bottom: 8px;">${titleText}</h3>
            
            <div style="margin-bottom: 16px;">
                <label class="form-label" style="display: block; margin-bottom: 6px; font-weight: 600; font-size: 13px; color: var(--text-secondary);">${nameLabel}</label>
                <input type="text" id="add-supplier-name-input" class="chat-text-input" placeholder="${namePlaceholder}" style="width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-glass); padding: 10px 14px; color: var(--text-primary); background: var(--bg-input);">
            </div>
            
            <div style="margin-bottom: 20px;">
                <label class="form-label" style="display: block; margin-bottom: 6px; font-weight: 600; font-size: 13px; color: var(--text-secondary);">${mobileLabel}</label>
                <input type="text" id="add-supplier-mobile-input" class="chat-text-input" placeholder="${mobilePlaceholder}" style="width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-glass); padding: 10px 14px; color: var(--text-primary); background: var(--bg-input);">
                <div id="add-supplier-error" style="color: var(--color-danger); font-size: 11px; margin-top: 6px; font-weight: 600; min-height: 16px;"></div>
            </div>
            
            <div style="display: flex; justify-content: flex-end; gap: 10px;">
                <button class="btn btn-secondary btn-sm" onclick="closeAddSupplierModal()">${cancelText}</button>
                <button class="btn btn-primary btn-sm" onclick="submitAddSupplier()">${saveText}</button>
            </div>
        </div>
    `;

    setTimeout(() => {
        modal.classList.add("show");
        document.getElementById("add-supplier-name-input").focus();
    }, 50);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeAddSupplierModal();
        }
    });
}

function closeAddSupplierModal() {
    const modal = document.getElementById("add-supplier-modal");
    if (modal) {
        modal.classList.remove("show");

        // Reset dynamic select dropdown value if user cancelled
        const select = document.getElementById("wholesaler-select");
        if (select && select.value === "__ADD_NEW__") {
            select.value = WHOLESALERS.length > 0 ? WHOLESALERS[0].id : "";
            renderWholesalerDetails();
        }
    }
}

function submitAddSupplier() {
    const nameInput = document.getElementById("add-supplier-name-input");
    const mobileInput = document.getElementById("add-supplier-mobile-input");
    const errorDiv = document.getElementById("add-supplier-error");

    if (errorDiv) errorDiv.textContent = "";

    const name = nameInput.value.trim();
    const mobile = mobileInput.value.trim();

    if (!name) {
        const err = currentLang === "en" ? "Please enter a supplier name." : "தயவுசெய்து வியாபாரி பெயரை உள்ளிடவும்.";
        if (errorDiv) errorDiv.textContent = err;
        return;
    }

    if (!mobile) {
        const err = currentLang === "en" ? "Please enter a mobile number." : "தயவுசெய்து தொலைபேசி எண்ணை உள்ளிடவும்.";
        if (errorDiv) errorDiv.textContent = err;
        return;
    }

    const token = localStorage.getItem('token');
    fetch('/api/suppliers', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, mobile_number: mobile })
    })
        .then(res => {
            if (!res.ok) return res.json().then(e => { throw new Error(e.error || 'Server error'); });
            return res.json();
        })
        .then(data => {
            // Success toast/banner
            const successMsg = currentLang === "en" ?
                `✅ Supplier ${data.name} (+${data.mobile_number}) added successfully!` :
                `✅ மொத்த வியாபாரி ${data.name} (+${data.mobile_number}) வெற்றிகரமாக சேர்க்கப்பட்டார்!`;
            showToast(successMsg);

            // Reload suppliers list
            fetchSuppliers().then(() => {
                // Select the newly added supplier automatically
                const select = document.getElementById("wholesaler-select");
                if (select) {
                    select.value = String(data.id);
                    renderWholesalerDetails();
                }
            });

            closeAddSupplierModal();
        })
        .catch(err => {
            if (errorDiv) {
                errorDiv.textContent = err.message;
            } else {
                console.error("Add supplier error:", err);
            }
        });
}

// Expose modal handlers globally
window.openAddSupplierModal = openAddSupplierModal;
window.closeAddSupplierModal = closeAddSupplierModal;
window.submitAddSupplier = submitAddSupplier;

// ==========================================
// WHOLESALE ORDERS SERVICE INTERFACE
// ==========================================

function checkAndDispatchVoiceOrder(supplierMobile, orderId, supplierName) {
    if (!recordedAudioBase64) return;

    fetch('/api/wholesale/send-voice-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            supplier_mobile: supplierMobile,
            order_id: orderId,
            audio: recordedAudioBase64
        })
    })
        .then(res => {
            if (!res.ok) throw new Error('Failed to send voice order');
            return res.json();
        })
        .then(data => {
            console.log("Voice order WhatsApp webhook triggered:", data);

            // Show success banner/toast
            const msg = currentLang === "en" ?
                `🎙️ Voice Order & Item Stack sent to ${supplierName} on WhatsApp!` :
                `🎙️ குரல் வழி ஆர்டர் மற்றும் பொருட்கள் விவரம் ${supplierName}-க்கு வாட்ஸ்அப்பில் அனுப்பப்பட்டது!`;
            showToast(msg);

            addSimulationLog(
                `🎙️ Voice audio order clip sent to ${supplierName} WhatsApp (+${supplierMobile.replace(/[\s+]/g, '')}) successfully.`,
                "voice"
            );

            // Reset recorder state
            recordedAudioBase64 = null;
            const preview = document.getElementById("voice-preview-container");
            if (preview) preview.style.display = "none";
            const player = document.getElementById("voice-preview-player");
            if (player) player.src = "";
        })
        .catch(err => {
            console.error("WhatsApp voice note dispatch failed:", err);
        });
}

// Fixed orphaned syntax error here


function renderWholesaleOrdersTable(orders) {
    const suggestionsTbody = document.getElementById("supplier-suggestions-table-body");
    const mainTbody = document.getElementById("wholesale-orders-table-body");

    // 1. Render suggestions if panel exists
    if (suggestionsTbody) {
        const suggestions = orders.filter(o => o.status === 'SUGGESTED');
        if (suggestions.length === 0) {
            suggestionsTbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; color: var(--text-muted);" id="no_active_suggestions">
                        ${currentLang === "en" ? "No suggestions from suppliers." : "சமீபத்திய சப்ளையர் பரிந்துரைகள் ஏதும் இல்லை."}
                    </td>
                </tr>
            `;
        } else {
            suggestionsTbody.innerHTML = "";
            suggestions.forEach(s => {
                const prod = products.find(p => p.id === s.item_name);
                const itemNameDisplay = prod ? (currentLang === "en" ? prod.nameEn : prod.nameTa) : s.item_name;
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td><strong>${s.wholeseller_name}</strong></td>
                    <td>${itemNameDisplay}</td>
                    <td>${s.quantity}</td>
                    <td>
                        <button class="btn btn-success btn-sm" onclick="acceptWholesalerSuggestion(${s.id})">
                            ✅ ${currentLang === "en" ? "Accept & Order" : "ஏற்றுக்கொள் & ஆர்டர் செய்"}
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="rejectWholesalerSuggestion(${s.id})" style="margin-left: 6px;">
                            ❌ ${currentLang === "en" ? "Dismiss" : "நீக்கு"}
                        </button>
                    </td>
                `;
                suggestionsTbody.appendChild(tr);
            });
        }
    }

    // 2. Render normal orders (PENDING or DELIVERED)
    if (!mainTbody) return;

    const normalOrders = orders.filter(o => o.status !== 'SUGGESTED');

    if (normalOrders.length === 0) {
        mainTbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; color: var(--text-muted);" id="no_wholesale_orders">
                    ${currentLang === "en" ? "No recent wholesale orders found." : "சமீபத்திய மொத்த ஆர்டர்கள் ஏதும் இல்லை."}
                </td>
            </tr>
        `;
        return;
    }

    mainTbody.innerHTML = "";
    normalOrders.forEach(order => {
        const prod = products.find(p => p.id === order.item_name);
        const itemNameDisplay = prod ? (currentLang === "en" ? prod.nameEn : prod.nameTa) : order.item_name;
        const unitDisplay = prod ? (currentLang === "en" ? prod.unit : TRANSLATIONS[currentLang]["unit_" + prod.unit]) : '';

        const isPending = order.status === 'PENDING';
        const statusBadge = isPending ?
            `<span class="status-pill status-warning"><span class="status-dot yellow"></span>${currentLang === "en" ? "🚚 Pending / In-Transit" : "🚚 நிலுவையில் உள்ளது"}</span>` :
            `<span class="status-pill status-good"><span class="status-dot green"></span>${currentLang === "en" ? "🟢 Delivered" : "🟢 பெறப்பட்டது"}</span>`;

        const actionButton = isPending ?
            `<button class="btn btn-success btn-sm" onclick="receiveWholesaleOrder(${order.id})">
                ✅ ${currentLang === "en" ? "Received" : "பெறப்பட்டது"}
            </button>` :
            `<span style="color: var(--color-success); font-weight: 600;">✓</span>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>#${order.id}</td>
            <td><strong>${itemNameDisplay}</strong></td>
            <td>${order.quantity} ${unitDisplay}</td>
            <td>${order.wholeseller_name}</td>
            <td>${order.order_date}</td>
            <td>${statusBadge}</td>
            <td id="order-action-${order.id}">${actionButton}</td>
        `;
        mainTbody.appendChild(tr);
    });
}

function receiveWholesaleOrder(orderId) {
    fetch(`/api/wholesale/order/${orderId}/receive`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'Failed to receive order'); });
            return res.json();
        })
        .then(data => {
            showToast(currentLang === "en" ? "🟢 Stock synced and received successfully!" : "🟢 சரக்கு வெற்றிகரமாக பெறப்பட்டு புதுப்பிக்கப்பட்டது!");

            // Update local products stock state
            const prod = products.find(p => p.id === data.item_id);
            if (prod) {
                prod.stock = data.new_stock;
                saveDB();
            }

            // Re-render UI elements immediately
            renderInventoryTable();
            renderProductShelf();
            renderDashboard();
            renderPredictions();
            draftWholesalerOrder();

            // Refresh wholesale orders list
            
        })

        .catch(err => console.error(err));
}

// Expose receiveWholesaleOrder globally
window.receiveWholesaleOrder = receiveWholesaleOrder;




document.addEventListener('DOMContentLoaded', () => {
    // Selector updates
    safeAddEventListener("wholesaler-select", "change", function (e) {
        if (e.target.value === "__ADD_NEW__") {
            openAddSupplierModal();
        } else {
            renderWholesalerDetails();
        }
    });

    safeAddEventListener("send-order-btn-left", "click", function () {
        const mainBtn = document.getElementById("btn-order-whatsapp");
        if (mainBtn) mainBtn.click();
    });
});

// ==========================================
// NAVIGATION TABS CONTROLLER
// ==========================================

function switchTab(targetId) {
    // Deactivate current active states
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach(btn => btn.classList.remove("active"));

    // Activate selected (guard against missing element)
    const targetEl = document.getElementById(targetId);
    if (!targetEl) {
        console.warn(`[Nav] switchTab: tab element "${targetId}" not found in DOM`);
        return;
    }
    targetEl.classList.add("active");

    const activeNavBtn = document.querySelector(`.nav-tab[data-target="${targetId}"]`);
    if (activeNavBtn) activeNavBtn.classList.add("active");

    // Dynamic actions on tab focus
    if (targetId === "tab-dashboard") {
        renderDashboard();
    } else if (targetId === "tab-billing") {
        renderProductShelf();
    } else if (targetId === "tab-inventory") {
        renderInventoryTable();
    } else if (targetId === "tab-prediction") {
        renderPredictions();
    } else if (targetId === "tab-wholesaler") {
        fetchSuppliers().then(() => {
            
        });
    } else if (targetId === "tab-chatbot") {
        initChatWelcome();
    } else if (targetId === "tab-wholesaler-dashboard") {
        fetchWholesalerDashboardOrders();
        renderWholesalerReplenishmentSuggestions();
    }
}

document.querySelectorAll(".nav-tab").forEach(tabBtn => {
    tabBtn.addEventListener("click", function () {
        const target = this.getAttribute("data-target");
        switchTab(target);
    });
});

// ==========================================
// SYSTEM BOOTSTRAPPING
// ==========================================

window.addEventListener("DOMContentLoaded", () => {
    // 1. Restore theme preference
    initThemeToggle();

    // 2. Set default language
    toggleLanguage("en");

    // 3. Restore session state — this handles role-based tab routing internally
    checkSessionState();

    // 4. Init forecast chart
    initForecastChart();

    // 5. Load wholesaler/supplier data for shopkeeper view (skipped if wholesaler handles it via their portal)
    const storedUser = (() => {
        try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
    })();
    if (!storedUser || storedUser.role !== "WHOLESALER") {
        fetchSuppliers().then(() => {
            
        });
    }
});

// ==========================================
// THEME SWITCH CONTROLLER
// ==========================================
function initThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle-checkbox");
    if (themeToggle) {
        safeAddEventListener("theme-toggle-checkbox", "change", function (e) {
            const theme = e.target.checked ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        });

        // Restore saved theme on load
        const savedTheme = localStorage.getItem("theme") || "dark";
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeToggle.checked = (savedTheme === "dark");
    }
}

// ==========================================
// CENTRAL DASHBOARD PORTAL
// ==========================================
function renderDashboard() {
    const today = new Date().toISOString().split('T')[0];
    const todayTx = transactionHistory.filter(tx => tx.date === today);

    // Revenue
    const revenue = todayTx.reduce((sum, tx) => sum + tx.revenue, 0);
    document.getElementById("dash-today-revenue").textContent = Math.round(revenue);

    // Bills count (unique billId, fallback to tx count if no billId)
    const billIds = new Set();
    let legacyBillCount = 0;
    todayTx.forEach(tx => {
        if (tx.billId) {
            billIds.add(tx.billId);
        } else {
            legacyBillCount++;
        }
    });
    const totalBills = billIds.size + legacyBillCount;
    document.getElementById("dash-today-bills-count").textContent = totalBills;

    // Total products in DB
    document.getElementById("dash-total-items-count").textContent = products.length;

    // Low stock count (stock <= threshold)
    const lowStockProducts = products.filter(p => p.stock <= p.threshold);
    document.getElementById("dash-low-stock-count").textContent = lowStockProducts.length;

    // Recent Sales
    const recentSalesContainer = document.getElementById("dash-recent-sales-container");
    recentSalesContainer.innerHTML = "";
    if (todayTx.length === 0) {
        recentSalesContainer.innerHTML = `<div class="dash-empty-msg">${currentLang === "en" ? "No sales recorded today." : "இன்று விற்பனை எதுவும் இல்லை."}</div>`;
    } else {
        // Show last 5 transactions
        const recentTx = todayTx.slice(-5).reverse();
        recentTx.forEach(tx => {
            const prod = products.find(p => p.id === tx.productId);
            if (!prod) return;
            const item = document.createElement("div");
            item.className = "dash-list-item";
            item.innerHTML = `
                <span>${currentLang === "en" ? prod.nameEn : prod.nameTa} (x${tx.quantity})</span>
                <span class="dash-item-revenue">₹${Math.round(tx.revenue)}</span>
            `;
            recentSalesContainer.appendChild(item);
        });
    }

    // Critical Reorder Items
    const criticalContainer = document.getElementById("dash-critical-items-container");
    criticalContainer.innerHTML = "";
    if (lowStockProducts.length === 0) {
        criticalContainer.innerHTML = `<div class="dash-empty-msg text-success">${currentLang === "en" ? "All stock levels are good! ✓" : "அனைத்து சாமான்களும் போதுமான அளவு உள்ளன! ✓"}</div>`;
    } else {
        lowStockProducts.forEach(p => {
            const item = document.createElement("div");
            item.className = "dash-list-item warning";
            item.innerHTML = `
                <div class="dash-item-info">
                    <strong>${currentLang === "en" ? p.nameEn : p.nameTa}</strong>
                    <span class="text-muted" style="font-size: 11px;">Stock: ${p.stock} ${currentLang === "en" ? p.unit : TRANSLATIONS[currentLang]["unit_" + p.unit]} (Min: ${p.threshold})</span>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="quickReorderTrigger('${p.id}')">
                    ${currentLang === "en" ? "Reorder" : "ஆர்டர் செய்"}
                </button>
            `;
            criticalContainer.appendChild(item);
        });
    }
}

// Bind dashboard button navigation
safeAddEventListener("dash-go-billing-btn", "click", () => switchTab("tab-billing"));
safeAddEventListener("dash-go-stock-btn", "click", () => switchTab("tab-inventory"));

// ==========================================
// BARCODE SCANNER LOGIC FOR PREDICTIONS
// ==========================================
function handleBarcodeScanClick() {
    const input = document.getElementById("barcode-scan-input");
    if (!input || !input.value.trim()) {
        alert(currentLang === 'ta' ? 'பார்கோடு / SKU ஐ உள்ளிடவும்!' : 'Please enter a Barcode / SKU!');
        return;
    }
    const barcode = input.value.trim();
    if (window.scanBarcodeForPrediction) {
        window.scanBarcodeForPrediction(barcode);
    }
}

// ==========================================
// REACT FORECAST CHART COMPONENT DEFINITION
// ==========================================
let forecastChartRoot = null;

function initForecastChart() {
    const container = document.getElementById("forecast-chart-container");
    if (!container) return;

    try {
        const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

        const PRODUCT_TRANSLATIONS_TA = {
            ONION: "வெங்காயம்",
            TOMATO: "தக்காளி",
            POTATO: "உருளைக்கிழங்கு",
            RICE: "அரிசி மூட்டை",
            COCONUT: "தேங்காய்",
            GARLIC: "வெள்ளைப் பூண்டு",
            GINGER: "இஞ்சி",
            TURMERIC_PWD: "மஞ்சள் தூள்",
            CHILLI_PWD: "மிளகாய் தூள்",
            CORIANDER_PWD: "மல்லித் தூள்",
            MUSTARD_SEEDS: "கடுகு",
            CUMIN_SEEDS: "சீரகம்",
            TOOR_DAL: "துவரம் பருப்பு",
            URAD_DAL: "உளுத்தம் பருப்பு",
            CHANA_DAL: "கடலைப் பருப்பு",
            WHEAT_FLOUR: "கோதுமை மாவு",
            SUGAR: "சர்க்கரை",
            JAGGERY: "வெல்லம்",
            SUNFLOWER_OIL: "சூரியகாந்தி எண்ணெய்",
            COCONUT_OIL: "தேங்காய் எண்ணெய்",
            GHEE: "நெய்",
            SALT: "உப்பு",
            TEA_LEAVES: "தேயிலை",
            COFFEE_POWDER: "காபி தூள்",
            TAMARIND: "புளி"
        };

        const chartTranslations = {
            en: {
                title: "AI Demand Forecast & Historical Sales",
                selectLabel: "Select Product:",
                viewLabel: "View Mode:",
                daily: "Daily",
                weekly: "Weekly",
                monthly: "Monthly",
                loading: "Analyzing sales logs and predicting demand...",
                error: "Error: ",
                legendActual: "Actual Sales (Historical)",
                legendForecast: "Projected Sales (Forecast)",
                tooltipDate: "Period",
                tooltipSales: "Actual Sales",
                tooltipProjected: "Projected Sales",
                onion: "Onion",
                tomato: "Tomato",
                potato: "Potato",
                rice: "Rice Sack",
                coconut: "Coconut"
            },
            ta: {
                title: "விற்பனை மற்றும் தேவை கணிப்பு வரைபடம்",
                selectLabel: "பொருளைத் தேர்ந்தெடு:",
                viewLabel: "காட்சி முறை:",
                daily: "தினசரி",
                weekly: "வாராந்திர",
                monthly: "மாதாந்திர",
                loading: "விற்பனை பதிவுகளை ஆராய்ந்து தேவையை கணிக்கிறது...",
                error: "பிழை: ",
                legendActual: "உண்மை விற்பனை (வரலாறு)",
                legendForecast: "மதிப்பிடப்பட்ட தேவை (கணிப்பு)",
                tooltipDate: "காலம்",
                tooltipSales: "உண்மை விற்பனை",
                tooltipProjected: "கணிக்கப்பட்ட விற்பனை",
                onion: "வெங்காயம்",
                tomato: "தக்காளி",
                potato: "உருளைக்கிழங்கு",
                rice: "அரிசி மூட்டை",
                coconut: "தேங்காய்"
            }
        };

        function SixMonthPredictionChart({ lang }) {
            const currentLangKey = lang === 'ta' ? 'ta' : 'en';
            const t = chartTranslations[currentLangKey];

            const [selectedProduct, setSelectedProduct] = React.useState('all');
            const [rawData, setRawData] = React.useState(null);
            const [loading, setLoading] = React.useState(false);
            const [error, setError] = React.useState(null);

            React.useEffect(() => {
                setLoading(true);
                setError(null);
                try {
                    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    const d = new Date();
                    const currentMonth = d.getMonth();
                    
                    const months = [];
                    for (let i = 0; i < 6; i++) {
                        months.push(monthNames[(currentMonth + i) % 12]);
                    }

                    const productData = products.map(p => {
                        const logs = transactionHistory.filter(log => log.productId === p.id);
                        const totalSales6Months = logs.reduce((sum, log) => sum + log.quantity, 0);
                        const avgDaily6Months = totalSales6Months / 180 || Math.max(1, (p.threshold || 20) / 7);
                        
                        const recentLogs = logs.slice(-14);
                        const avgDailyRecent = (recentLogs.reduce((sum, log) => sum + log.quantity, 0) / Math.max(1, recentLogs.length)) || avgDaily6Months;
                        
                        const trendCoeff = avgDaily6Months > 0 ? (avgDailyRecent / avgDaily6Months) : 1.0;
                        
                        let monthlyDemand = [];
                        let currentMonthly = avgDailyRecent * 30;
                        
                        for (let i = 0; i < 6; i++) {
                            const dampenedTrend = 1 + ((trendCoeff - 1) * 0.1); 
                            currentMonthly = currentMonthly * dampenedTrend;
                            monthlyDemand.push(Math.round(currentMonthly));
                        }
                        
                        return {
                            id: p.id,
                            name: p.nameEn || p.id,
                            monthlyDemand: monthlyDemand
                        };
                    });

                    setRawData({ months, products: productData });
                    setLoading(false);
                } catch (err) {
                    setError("Failed to process prediction data.");
                    setLoading(false);
                }
            }, []);

            const handleProductChange = (e) => {
                setSelectedProduct(e.target.value);
            };

            const chartData = React.useMemo(() => {
                if (!rawData || !rawData.months || !rawData.products) return [];
                
                return rawData.months.map((month, mIndex) => {
                    let totalDemand = 0;
                    
                    if (selectedProduct === 'all') {
                        rawData.products.forEach(p => {
                            totalDemand += p.monthlyDemand[mIndex] || 0;
                        });
                    } else {
                        const prod = rawData.products.find(p => p.id === selectedProduct);
                        if (prod) {
                            totalDemand = prod.monthlyDemand[mIndex] || 0;
                        }
                    }

                    return {
                        month: month,
                        predictedDemand: totalDemand
                    };
                });
            }, [rawData, selectedProduct]);

            // Custom localized tooltip
            const CustomTooltip = ({ active, payload, label }) => {
                if (active && payload && payload.length) {
                    const val = payload[0].value;
                    return React.createElement(
                        'div',
                        {
                            style: {
                                backgroundColor: 'var(--bg-secondary)',
                                border: '1px solid var(--border-glass)',
                                padding: '12px',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                boxShadow: 'var(--shadow-md)'
                            }
                        },
                        React.createElement('p', { style: { fontWeight: '700', marginBottom: '6px', fontSize: '12px' } }, label),
                        React.createElement(
                            'p',
                            { style: { color: 'var(--color-primary)', fontWeight: '600', fontSize: '13px', margin: 0 } },
                            `${lang === 'ta' ? 'தேவை கணிப்பு:' : 'Predicted Demand:'} ${val} ${lang === 'ta' ? 'அலகுகள்' : 'units'}`
                        )
                    );
                }
                return null;
            };

            return React.createElement(
                'div',
                {
                    style: {
                        marginTop: '30px',
                        padding: '24px',
                        background: 'var(--bg-panel-sub)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: 'var(--radius-md)'
                    }
                },
                React.createElement(
                    'div',
                    {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '24px',
                            flexWrap: 'wrap',
                            gap: '16px'
                        }
                    },
                    React.createElement(
                        'h3',
                        { style: { fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 } },
                        lang === 'ta' ? '6-மாத தேவை கணிப்பு' : '6-Month Demand Projection'
                    ),
                    React.createElement(
                        'div',
                        { style: { display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' } },
                        // Product Dropdown Filter
                        React.createElement(
                            'div',
                            { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                            React.createElement(
                                'label',
                                { style: { fontSize: '12px', fontWeight: '700', color: 'var(--text-secondary)' } },
                                lang === 'ta' ? 'பொருளைத் தேர்ந்தெடு:' : 'Select Product:'
                            ),
                            React.createElement(
                                'select',
                                {
                                    value: selectedProduct,
                                    onChange: handleProductChange,
                                    className: 'form-select',
                                    style: { width: 'auto', background: 'var(--bg-input)', color: 'var(--text-primary)', border: '1px solid var(--border-glass)', padding: '6px 12px', borderRadius: 'var(--radius-sm)' }
                                },
                                React.createElement('option', { value: 'all' }, lang === 'ta' ? 'அனைத்து பொருட்கள்' : 'All Products'),
                                products.map(p => {
                                    const key = p.id.toUpperCase();
                                    const displayName = lang === 'ta' ? (PRODUCT_TRANSLATIONS_TA[key] || p.nameEn || p.nameTa || p.id) : (p.nameEn || p.id);
                                    return React.createElement('option', { key: p.id, value: p.id }, displayName);
                                })
                            )
                        )
                    )
                ),
                loading && React.createElement('div', { style: { textAlign: 'center', color: 'var(--text-secondary)', padding: '40px' } }, t.loading),
                error && React.createElement('div', { style: { color: 'var(--color-danger)', textAlign: 'center', padding: '40px' } }, `${t.error}${error}`),
                !loading && !error && React.createElement(
                    ResponsiveContainer,
                    { width: '99%', height: 350 },
                    React.createElement(
                        BarChart,
                        { data: chartData, margin: { top: 10, right: 10, left: -20, bottom: 20 } },
                        React.createElement(
                            'defs',
                            null,
                            // Define diagonal pattern
                            React.createElement(
                                'pattern',
                                {
                                    id: 'barPattern',
                                    width: '8',
                                    height: '8',
                                    patternUnits: 'userSpaceOnUse',
                                    patternTransform: 'rotate(45)'
                                },
                                React.createElement('rect', { width: '8', height: '8', fill: 'rgba(59, 130, 246, 0.2)' }),
                                React.createElement('line', { x1: '0', y1: '0', x2: '0', y2: '8', stroke: 'var(--color-primary)', strokeWidth: '3' })
                            )
                        ),
                        React.createElement(CartesianGrid, { strokeDasharray: '3 3', stroke: 'rgba(255,255,255,0.05)', vertical: false }),
                        React.createElement(XAxis, {
                            dataKey: 'month',
                            tick: { fill: '#94a3b8', fontSize: 12, fontWeight: 600 },
                            tickLine: false,
                            axisLine: false,
                            angle: 0
                        }),
                        React.createElement(YAxis, { tick: { fill: '#94a3b8', fontSize: 10 }, tickLine: false, axisLine: false }),
                        React.createElement(Tooltip, { content: CustomTooltip, cursor: { fill: 'rgba(255,255,255,0.05)' } }),
                        React.createElement(Legend, { verticalAlign: 'top', height: 36 }),
                        React.createElement(Bar, {
                            dataKey: 'predictedDemand',
                            fill: '#ef4444',
                            radius: [4, 4, 0, 0],
                            name: t.legendForecast,
                            barSize: 40
                        })
                    )
                )
            );
        }

        if (!forecastChartRoot) {
            forecastChartRoot = ReactDOM.createRoot(container);
        }
        forecastChartRoot.render(React.createElement(SixMonthPredictionChart, { lang: currentLang }));
        console.log('React Recharts Forecast bar chart loaded successfully.');
    } catch (e) {
        console.error('Failed to initialize React Recharts Forecast bar chart:', e);
    }
}

// ==========================================
// TOAST NOTIFICATION UTILITY
// ==========================================

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4500);
}

function triggerWhatsAppAlert(productId, stock) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.mobile_number) return;

    fetch(`/api/inventory/${productId}/reload`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_mobile: user.mobile_number,
            stock: stock
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.alert_sent) {
                showToast(`🚨 Low stock alert sent to +${data.sent_to}!`);
                showCriticalLowStockBanner(data.sent_to);
            }
        })
        .catch(err => console.error("Error triggering stock alert:", err));
}

// ==========================================
// USER AUTHENTICATION CONTROLLER (FRONTEND)
// ==========================================

// Original checkSessionState and updateNavigationForRole removed due to duplication

function fetchWholesalerDashboardOrders() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.username) return;

    fetch(`/api/wholesaler/orders?username=${encodeURIComponent(user.username)}`)
        .then(res => {
            if (!res.ok) throw new Error('Failed to fetch wholesaler orders');
            return res.json();
        })
        .then(orders => {
            renderWholesalerDashboardOrders(orders);
        })
        .catch(err => console.error("Error fetching wholesaler dashboard orders:", err));
}

function renderWholesalerDashboardOrders(orders) {
    const tbody = document.getElementById("wholesaler-incoming-orders-body");
    if (!tbody) return;

    if (!orders || orders.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; color: var(--text-muted);">
                    ${currentLang === "en" ? "No incoming orders found." : "வரவிருக்கும் ஆர்டர்கள் ஏதும் இல்லை."}
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = "";
    orders.forEach(order => {
        const prod = products.find(p => p.id === order.item_name);
        const itemNameDisplay = prod ? (currentLang === "en" ? prod.nameEn : prod.nameTa) : order.item_name;
        const unitDisplay = prod ? (currentLang === "en" ? prod.unit : TRANSLATIONS[currentLang]["unit_" + prod.unit]) : '';

        const isPending = order.status === 'PENDING';
        const statusBadge = isPending ?
            `<span class="status-pill status-warning"><span class="status-dot yellow"></span>${currentLang === "en" ? "🚚 Pending" : "🚚 நிலுவை"}</span>` :
            `<span class="status-pill status-good"><span class="status-dot green"></span>${currentLang === "en" ? "🟢 Delivered" : "🟢 வழங்கப்பட்டது"}</span>`;

        const actionButton = isPending ?
            `<button class="btn btn-success btn-sm" onclick="dispatchWholesalerOrder(${order.id})">
                ✅ ${currentLang === "en" ? "Deliver & Sync" : "வழங்கு & இயக்கு"}
            </button>` :
            `<span style="color: var(--color-success); font-weight: 600;">✓ ${currentLang === "en" ? "Fulfilled" : "நிறைவுற்றது"}</span>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>#${order.id}</td>
            <td><strong>${itemNameDisplay}</strong></td>
            <td>${order.quantity} ${unitDisplay}</td>
            <td>${order.order_date}</td>
            <td>${statusBadge}</td>
            <td>${actionButton}</td>
        `;
        tbody.appendChild(tr);
    });
}

function dispatchWholesalerOrder(orderId) {
    fetch(`/api/wholesale/order/${orderId}/receive`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'Failed to fulfill order'); });
            return res.json();
        })
        .then(data => {
            showToast(currentLang === "en" ? "🟢 Order fulfilled and stock updated successfully!" : "🟢 ஆர்டர் வழங்கப்பட்டு சரக்கு வெற்றிகரமாக புதுப்பிக்கப்பட்டது!");
            fetchWholesalerDashboardOrders();
        })

        .catch(err => console.error(err));
}

// Expose globally
window.dispatchWholesalerOrder = dispatchWholesalerOrder;
window.fetchWholesalerDashboardOrders = fetchWholesalerDashboardOrders;


// ==========================================
// LIVE UI ALERT BANNER UTILITIES
// ==========================================

function showCriticalLowStockBanner(mobileNumber) {
    // Format mobile number
    const formattedPhone = mobileNumber.startsWith('+') ? mobileNumber : '+' + mobileNumber;

    // Check if banner already exists
    let banner = document.getElementById("critical-low-stock-banner");
    if (!banner) {
        banner = document.createElement("div");
        banner.id = "critical-low-stock-banner";
        banner.className = "live-alert-banner";
        document.body.appendChild(banner);
    }

    // Update content
    banner.innerHTML = `
        <div class="live-alert-banner-content">
            <span>🚨 Critical Low Stock! WhatsApp alert dispatched to ${formattedPhone}</span>
        </div>
        <button class="live-alert-banner-close" onclick="closeCriticalLowStockBanner()">&times;</button>
    `;

    // Trigger transition
    setTimeout(() => {
        banner.classList.add("show");
    }, 50);

    // Automatically close after 8 seconds
    if (window.lowStockBannerTimer) {
        clearTimeout(window.lowStockBannerTimer);
    }
    window.lowStockBannerTimer = setTimeout(() => {
        closeCriticalLowStockBanner();
    }, 8000);
}

function closeCriticalLowStockBanner() {
    const banner = document.getElementById("critical-low-stock-banner");
    if (banner) {
        banner.classList.remove("show");
    }
}

// Expose functions to global scope
window.showCriticalLowStockBanner = showCriticalLowStockBanner;
window.closeCriticalLowStockBanner = closeCriticalLowStockBanner;

// ==========================================
// MANUAL STOCK ADDITION MODAL UTILITIES
// ==========================================

function openAddStockModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if modal already exists
    let modal = document.getElementById("add-stock-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "add-stock-modal";
        modal.className = "modal-overlay";
        document.body.appendChild(modal);
    }

    const titleText = currentLang === "en" ? `Add Stock - ${product.nameEn}` : `சரக்கு சேர்க்க - ${product.nameTa}`;
    const qtyLabel = currentLang === "en" ? "Quantity to Add:" : "சேர்க்க வேண்டிய அளவு:";
    const inputPlaceholder = currentLang === "en" ? "Enter quantity (e.g. 10)" : "அளவை எழுதவும் (எ.கா. 10)";
    const submitText = currentLang === "en" ? "Add Stock" : "சேர்";
    const cancelText = currentLang === "en" ? "Cancel" : "ரத்து செய்";

    modal.innerHTML = `
        <div class="modal-content glass-panel">
            <h3 style="margin-bottom: 16px; font-weight: 700; font-size: 18px; color: var(--text-primary); border-bottom: 1px solid var(--border-glass); padding-bottom: 8px;">${titleText}</h3>
            <div style="margin-bottom: 20px;">
                <label class="form-label" style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 13px; color: var(--text-secondary);">${qtyLabel}</label>
                <input type="number" id="add-stock-qty-input" class="chat-text-input" placeholder="${inputPlaceholder}" min="0.01" step="any" style="width: 100%; border-radius: var(--radius-sm); border: 1px solid var(--border-glass); padding: 10px 14px; color: var(--text-primary); background: var(--bg-input);">
                <div id="add-stock-error" style="color: var(--color-danger); font-size: 11px; margin-top: 6px; font-weight: 600; min-height: 16px;"></div>
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 10px;">
                <button class="btn btn-secondary btn-sm" onclick="closeAddStockModal()">${cancelText}</button>
                <button class="btn btn-primary btn-sm" onclick="submitAddStock('${product.id}')">${submitText}</button>
            </div>
        </div>
    `;

    // Trigger open show state
    setTimeout(() => {
        modal.classList.add("show");
        document.getElementById("add-stock-qty-input").focus();
    }, 50);

    // Close on overlay click
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeAddStockModal();
        }
    });
}

function closeAddStockModal() {
    const modal = document.getElementById("add-stock-modal");
    if (modal) {
        modal.classList.remove("show");
    }
}

function openNotificationsModal() {
    let modal = document.getElementById("notifications-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "notifications-modal";
        modal.className = "modal-overlay";
        modal.innerHTML = `
            <div class="modal-content glass-panel" style="max-width: 400px;">
                <h3 style="margin-bottom: 16px; font-weight: 700; font-size: 18px; border-bottom: 1px solid var(--border-glass); padding-bottom: 8px;">
                    ${currentLang === "en" ? "Low Stock Alerts" : "குறைந்த இருப்பு எச்சரிக்கைகள்"}
                </h3>
                <div id="notifications-list" style="max-height: 300px; overflow-y: auto;">
                    <p>${currentLang === "en" ? "Loading..." : "ஏற்றப்படுகிறது..."}</p>
                </div>
                <button class="btn btn-secondary btn-sm" style="margin-top: 20px; width: 100%;" onclick="document.getElementById('notifications-modal').classList.remove('show')">
                    ${currentLang === "en" ? "Close" : "மூடு"}
                </button>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener("click", function (e) {
            if (e.target === modal) modal.classList.remove("show");
        });
    }
    modal.classList.add("show");

    const token = localStorage.getItem('token');
    fetch('/api/notifications', {
        headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
        const listDiv = document.getElementById("notifications-list");
        if (!listDiv) return;
        
        if (data.error) {
            listDiv.innerHTML = `<p style="color:var(--color-danger)">Error: ${data.error}</p>`;
            return;
        }

        if (!data || data.length === 0) {
            const noAlerts = currentLang === "en" ? "No low-stock alerts. Everything is good! 🎉" : "எச்சரிக்கைகள் ஏதும் இல்லை. அனைத்தும் சரியாக உள்ளது! 🎉";
            listDiv.innerHTML = `<p style="text-align:center; color: var(--color-good); font-weight:bold;">${noAlerts}</p>`;
            return;
        }

        let html = '<ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">';
        data.forEach(item => {
            const name = currentLang === "en" ? item.nameEn : item.nameTa;
            html += `<li style="padding: 10px; background: var(--bg-hover); border-radius: var(--radius-sm); border-left: 4px solid var(--color-danger); display: flex; justify-content: space-between;">
                <span style="font-weight: 600;">${name}</span>
                <span style="color: var(--color-danger); font-weight: 700;">${item.stock} ${item.unit} left</span>
            </li>`;
        });
        html += '</ul>';
        listDiv.innerHTML = html;
    })
    .catch(err => {
        const listDiv = document.getElementById("notifications-list");
        if (listDiv) listDiv.innerHTML = `<p style="color:var(--color-danger)">Failed to load notifications.</p>`;
    });
}
window.openNotificationsModal = openNotificationsModal;

function submitAddStock(productId) {
    const errorDiv = document.getElementById("add-stock-error");
    if (errorDiv) errorDiv.textContent = "";

    const inputVal = document.getElementById("add-stock-qty-input").value.trim();
    const qty = parseFloat(inputVal);

    if (isNaN(qty) || qty <= 0) {
        const errorMsg = currentLang === "en" ? "Please enter a valid positive number." : "தயவுசெய்து சரியான நேர்மறை எண்ணை எழுதவும்.";
        if (errorDiv) errorDiv.textContent = errorMsg;
        return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem('token');
    
    if (!user || (!user.mobile_number && !user.phone) || !token) {
        const errorMsg = currentLang === "en" ? "User authentication session missing." : "பயனர் அங்கீகார அமர்வு இல்லை.";
        if (errorDiv) errorDiv.textContent = errorMsg;
        return;
    }

    fetch(`/api/inventory/${productId}/add-stock`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            quantity_added: qty,
            user_mobile: user.mobile_number || user.phone
        })
    })
        .then(async res => {
            if (!res.ok) {
                let errMsg = 'Server error';
                try {
                    const errorText = await res.text();
                    const errData = JSON.parse(errorText);
                    errMsg = errData.error || errMsg;
                } catch (e) {
                    // Fallback if not JSON
                }
                throw new Error(errMsg);
            }
            return res.json();
        })
        .then(data => {
            if (data.status === 'success') {
                // Update local stock state
                const prod = products.find(p => p.id === productId);
                if (prod) {
                    prod.stock = data.new_stock;
                }
                saveDB();

                // Success toast
                showToast(currentLang === "en" ? "✅ Stock successfully updated!" : "✅ சரக்கு வெற்றிகரமாக புதுப்பிக்கப்பட்டது!");

                // Re-render components
                renderInventoryTable();
                renderProductShelf();
                renderDashboard();
                renderPredictions();
                draftWholesalerOrder();

                // Trigger alert banner if backend indicated alert was sent
                if (data.alert_sent) {
                    showCriticalLowStockBanner(user.mobile_number);
                }

                // Close modal
                closeAddStockModal();
            } else {
                throw new Error(data.message || 'Operation failed');
            }
        })
        .catch(err => {
            if (errorDiv) {
                errorDiv.textContent = err.message;
            } else {
                console.error("Add stock submit error:", err);
            }
        });
}

// Expose functions globally
window.openAddStockModal = openAddStockModal;
window.closeAddStockModal = closeAddStockModal;
window.submitAddStock = submitAddStock;

// ==========================================
// PROACTIVE REPLENISHMENT SUGGESTIONS
// (Wholesaler-side: propose orders for low-stock items)
// ==========================================

function renderWholesalerReplenishmentSuggestions() {
    const tbody = document.getElementById("wholesaler-proactive-suggestions-body");
    if (!tbody) return;

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "WHOLESALER") return;

    // Find all low-stock or critical items from the shared products list
    const lowStockItems = products.filter(p => p.stock <= p.threshold);

    if (lowStockItems.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; color: var(--text-muted);">
                    ${currentLang === "en" ? "✅ No low-stock items detected in shopkeeper's inventory." : "✅ சரக்கு குறைவான பொருட்கள் ஏதும் இல்லை."}
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = "";
    lowStockItems.forEach(p => {
        const nameDisplay = currentLang === "en" ? p.nameEn : p.nameTa;
        const unitDisplay = currentLang === "en" ? p.unit : (TRANSLATIONS[currentLang]["unit_" + p.unit] || p.unit);
        const suggestedQty = Math.max(p.threshold * 3 - p.stock, p.threshold);
        const stockBar = p.stock <= 0
            ? `<span class="status-pill status-critical"><span class="status-dot red"></span>${currentLang === "en" ? "Out of Stock" : "கையிருப்பில் இல்லை"}</span>`
            : `<span class="status-pill status-warning"><span class="status-dot yellow"></span>${p.stock} / ${p.threshold} ${unitDisplay}</span>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <strong>${nameDisplay}</strong>
                <span style="font-size: 11px; color: var(--text-muted); display: block;">${p.id}</span>
            </td>
            <td>${stockBar}</td>
            <td>
                <input
                    type="number"
                    id="suggest-qty-${p.id}"
                    class="chat-text-input"
                    value="${suggestedQty}"
                    min="1"
                    step="any"
                    style="width: 90px; padding: 6px 10px; height: 34px; font-size: 13px;"
                >
                <span style="font-size: 12px; color: var(--text-muted); margin-left: 4px;">${unitDisplay}</span>
            </td>
            <td>
                <button
                    class="btn btn-primary btn-sm"
                    onclick="sendReplenishmentSuggestion('${p.id}', '${nameDisplay}')"
                    style="padding: 6px 12px;"
                >
                    📤 ${currentLang === "en" ? "Send Suggestion" : "பரிந்துரை அனுப்பு"}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function sendReplenishmentSuggestion(productId, productName) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "WHOLESALER") return;

    const qtyInput = document.getElementById(`suggest-qty-${productId}`);
    const qty = parseFloat(qtyInput ? qtyInput.value : 0);

    if (!qty || qty <= 0) {
        showToast(currentLang === "en" ? "Please enter a valid quantity." : "சரியான அளவை உள்ளிடவும்.");
        return;
    }

    fetch('/api/wholesale/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            item_name: productId,
            quantity: qty,
            wholeseller_name: user.username,
            supplier_id: null
        })
    })
        .then(res => {
            if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'Failed to send suggestion'); });
            return res.json();
        })
        .then(() => {
            showToast(
                currentLang === "en"
                    ? `✅ Replenishment suggestion for ${productName} sent to shopkeeper!`
                    : `✅ ${productName} பரிந்துரை கடைக்காரருக்கு அனுப்பப்பட்டது!`
            );
        })

        .catch(err => console.error(err));
}

function acceptWholesalerSuggestion(orderId) {
    fetch(`/api/wholesale/order/${orderId}/accept-suggestion`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'Failed to accept suggestion'); });
            return res.json();
        })
        .then(() => {
            showToast(
                currentLang === "en"
                    ? "✅ Suggestion accepted! Order is now PENDING."
                    : "✅ பரிந்துரை ஏற்றுக்கொள்ளப்பட்டது! ஆர்டர் நிலுவையில் உள்ளது."
            );
            
        })

        .catch(err => console.error(err));
}

function rejectWholesalerSuggestion(orderId) {
    fetch(`/api/wholesale/order/${orderId}/reject-suggestion`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => {
            if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'Failed to reject suggestion'); });
            return res.json();
        })
        .then(() => {
            showToast(
                currentLang === "en"
                    ? "🗑️ Suggestion dismissed."
                    : "🗑️ பரிந்துரை நீக்கப்பட்டது."
            );
            
        })

        .catch(err => console.error(err));
}

// Expose globally
window.sendReplenishmentSuggestion = sendReplenishmentSuggestion;
window.acceptWholesalerSuggestion = acceptWholesalerSuggestion;
window.rejectWholesalerSuggestion = rejectWholesalerSuggestion;
window.renderWholesalerReplenishmentSuggestions = renderWholesalerReplenishmentSuggestions;

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.style.padding = '12px 20px';
    toast.style.background = '#22c55e';
    toast.style.color = '#fff';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    toast.style.fontWeight = '600';
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => {
        if (container.contains(toast)) container.removeChild(toast);
    }, 4000);
}

function fetchNotifications() {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/notifications', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
        const listDiv = document.getElementById("notifications-list");
        if (!listDiv) return;
        
        if (data.error) {
            listDiv.innerHTML = `<p style="color:var(--color-danger)">Error: ${data.error}</p>`;
            return;
        }

        if (!data || data.length === 0) {
            const noAlerts = currentLang === "en" ? "No low-stock alerts. Everything is good! 🎉" : "எச்சரிக்கைகள் ஏதும் இல்லை. அனைத்தும் சரியாக உள்ளது! 🎉";
            listDiv.innerHTML = `<p style="text-align:center; color: var(--color-good); font-weight:bold;">${noAlerts}</p>`;
            return;
        }

        let html = '<ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">';
        data.forEach(item => {
            const name = currentLang === "en" ? item.nameEn : item.nameTa;
            html += `<li style="padding: 10px; background: var(--bg-hover); border-radius: var(--radius-sm); border-left: 4px solid var(--color-danger); display: flex; justify-content: space-between;">
                <span style="font-weight: 600;">${name}</span>
                <span style="color: var(--color-danger); font-weight: 700;">${item.stock} ${item.unit} left</span>
            </li>`;
        });
        html += '</ul>';
        listDiv.innerHTML = html;
    })
    .catch(err => {
        const listDiv = document.getElementById("notifications-list");
        if (listDiv) listDiv.innerHTML = `<p style="color:var(--color-danger)">Failed to load notifications.</p>`;
    });
}

// ==========================================
// AUTHENTICATION SYSTEM
// ==========================================
function initAuthSystem() {
    const authContainer = document.getElementById('auth-container');
    const loginTabBtn = document.getElementById('auth-login-tab-btn');
    const signupTabBtn = document.getElementById('auth-signup-tab-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Tab Switching
    safeAddEventListener("auth-login-tab-btn", 'click', () => {
        loginTabBtn.classList.add('active');
        signupTabBtn.classList.remove('active');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    safeAddEventListener("auth-signup-tab-btn", 'click', () => {
        signupTabBtn.classList.add('active');
        loginTabBtn.classList.remove('active');
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Login Handler
    safeAddEventListener("login-form", 'submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const errorMsg = document.getElementById('login-error-msg');
        
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('token', data.token);
                checkSessionState();
            } else {
                errorMsg.innerText = data.error || 'Login failed!';
            }
        } catch (err) {
            errorMsg.innerText = 'Server error. Is the backend running?';
        }
    });

    // Signup Handler
    safeAddEventListener("signup-form", 'submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const phone = document.getElementById('signup-phone').value;
        const role = document.getElementById('signup-role').value;
        const errorMsg = document.getElementById('signup-error-msg');
        
        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, phone, role })
            });
            const data = await res.json();
            
            if (res.ok) {
                // Auto-login after signup
                localStorage.setItem('user', JSON.stringify({ id: data.id, username, role, phone, mobile_number: phone }));
                localStorage.setItem('token', 'mock-token-' + data.id);
                checkSessionState();
            } else {
                errorMsg.innerText = data.error || 'Signup failed!';
            }
        } catch (err) {
            errorMsg.innerText = 'Server error. Is the backend running?';
        }
    });

    // Logout Handler
    if (logoutBtn) {
        safeAddEventListener("logout-btn", 'click', () => {
            localStorage.removeItem('user');
            checkSessionState();
        });
    }

    checkSessionState();
}

function checkSessionState() {
    const authContainer = document.getElementById('auth-container');
    let user = null;
    
    try {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (!savedUser || !savedUser.id) {
            localStorage.removeItem('user');
        } else {
            user = savedUser;
        }
    } catch (e) {
        localStorage.removeItem('user');
    }

    const profileBadge = document.getElementById('user-profile-badge');
    const appContainer = document.querySelector('.app-container');
    const appNav = document.querySelector('.app-nav');
    
    if (!user) {
        // Not logged in
        if (authContainer) authContainer.style.display = 'flex';
        if (profileBadge) profileBadge.style.display = 'none';
        if (appContainer) appContainer.style.display = 'none';
        if (appNav) appNav.style.display = 'none';
    } else {
        // Logged in
        if (authContainer) authContainer.style.display = 'none';
        if (profileBadge) profileBadge.style.display = 'flex';
        if (appContainer) appContainer.style.display = 'flex';
        if (appNav) appNav.style.display = 'flex';
        
        try {
            const usernameEl = document.getElementById('logged-username');
            const phoneEl = document.getElementById('logged-phone');
            if (usernameEl) usernameEl.innerText = user.username || 'User';
            if (phoneEl) phoneEl.innerText = user.phone || user.mobile_number || '';
            
            // Role-based routing
            const wholesalerTab = document.querySelector('button.nav-tab[data-target="tab-wholesaler-dashboard"]');
            const shopkeeperTabs = document.querySelectorAll('button.nav-tab:not([data-target="tab-wholesaler-dashboard"])');
            
            if (user.role === 'wholesaler') {
                shopkeeperTabs.forEach(tab => { if (tab) tab.style.display = 'none'; });
                if (wholesalerTab) {
                    wholesalerTab.style.display = 'flex';
                    wholesalerTab.click(); // Switch to wholesaler dashboard
                }
            } else {
                if (wholesalerTab) wholesalerTab.style.display = 'none';
                shopkeeperTabs.forEach(tab => { if (tab) tab.style.display = 'flex'; });
                // Make sure we aren't on the wholesaler tab
                const dashboardTab = document.querySelector('button.nav-tab[data-target="tab-dashboard"]');
                if (dashboardTab && !dashboardTab.classList.contains('active')) {
                    dashboardTab.click();
                }
            }
        } catch (e) {
            console.error("Invalid user data during rendering", e);
            localStorage.removeItem('user');
            alert("Session error occurred, please log in again.");
            checkSessionState();
        }
    }
}

function initNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            if (!targetId) return;
            
            // Log navigation switch as requested
            console.log('Navigation tab switched to: ' + targetId.replace('tab-', ''));
            
            // Update active state on tabs
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show target content, hide others
            tabContents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAuthSystem();
});

console.log('app.js loaded successfully');
