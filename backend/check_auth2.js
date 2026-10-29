// Comprehensive auth system diagnosis
const fs = require('fs');
const appJs = fs.readFileSync('d:/CODE BASE/app.js', 'utf8');
const indexHtml = fs.readFileSync('d:/CODE BASE/index.html', 'utf8');

// 1. Find all getElementById calls NOT inside any function (global scope)
// Strategy: find lines that have addEventListener or getElementById with no leading spaces for function body
const lines = appJs.split('\n');

// Find global-scope getElementById calls that could crash before DOMContentLoaded
let braceDepth = 0;
const globalCalls = [];
const funcDefs = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track brace depth
    for (const ch of line) {
        if (ch === '{') braceDepth++;
        else if (ch === '}') braceDepth--;
    }
    
    // Track function definitions
    if (/^function\s+\w+/.test(trimmed)) {
        funcDefs.push({ line: i + 1, name: trimmed.substring(0, 50) });
    }
    
    // Find getElementById at low brace depth (quasi-global scope)
    if (braceDepth <= 1 && 
        !trimmed.startsWith('//') && 
        !trimmed.startsWith('*') &&
        (trimmed.includes('document.getElementById') || trimmed.includes('document.querySelector')) &&
        trimmed.includes('addEventListener')) {
        globalCalls.push({ line: i + 1, depth: braceDepth, content: trimmed.substring(0, 100) });
    }
}

console.log('=== GLOBAL-SCOPE addEventListener CALLS (run before DOMContentLoaded) ===');
globalCalls.forEach(c => console.log(`  Line ${c.line} [depth=${c.depth}]: ${c.content}`));

// 2. Check if auth IDs exist in HTML
const authIds = ['auth-login-tab-btn', 'auth-signup-tab-btn', 'login-form', 'signup-form', 
                  'login-error-msg', 'signup-error-msg', 'login-username', 'login-password',
                  'signup-username', 'signup-password', 'signup-phone', 'signup-role', 'logout-btn'];

console.log('\n=== AUTH ELEMENT IDs IN HTML ===');
authIds.forEach(id => {
    const present = indexHtml.includes(`id="${id}"`);
    console.log(`  ${present ? '✅' : '❌'} ${id}`);
});

// 3. Check if initAuthSystem is called from DOMContentLoaded
const domLoadMatch = appJs.match(/DOMContentLoaded[\s\S]{0,500}/);
if (domLoadMatch) {
    const hasInitAuth = domLoadMatch[0].includes('initAuthSystem');
    const hasCheckSession = domLoadMatch[0].includes('checkSessionState');
    console.log('\n=== DOMContentLoaded CALLS ===');
    console.log(`  initAuthSystem called: ${hasInitAuth ? '✅' : '❌'}`);
    console.log(`  checkSessionState called: ${hasCheckSession ? '✅' : '❌'}`);
}

// 4. Find if there are any syntax errors in the auth section specifically
const authSection = appJs.substring(appJs.indexOf('function initAuthSystem'), appJs.indexOf('window.initAuthSystem'));
const openBraces = (authSection.match(/{/g) || []).length;
const closeBraces = (authSection.match(/}/g) || []).length;
console.log(`\n=== initAuthSystem BRACE BALANCE ===`);
console.log(`  Open: ${openBraces}, Close: ${closeBraces}, Balanced: ${openBraces === closeBraces ? '✅' : '❌'}`);

// 5. Check for the toggleLanguage function which runs at load time and touches auth IDs
const toggleLangSection = appJs.substring(appJs.indexOf('function toggleLanguage'), appJs.indexOf('function toggleLanguage') + 800);
console.log('\n=== toggleLanguage (first 300 chars) ===');
console.log(toggleLangSection.substring(0, 300));
