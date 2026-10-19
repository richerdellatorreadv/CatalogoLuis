const fs = require('fs');
const assert = require('assert');
const vm = require('vm');

const jsCode = fs.readFileSync('assets/js/app.js', 'utf8');

// Mock DOM environment
global.document = {
    addEventListener: () => {},
    getElementById: (id) => ({
        innerHTML: '',
        style: {},
        classList: { add: () => {}, remove: () => {} },
        addEventListener: () => {}
    }),
    querySelectorAll: () => []
};
global.window = {};

vm.runInThisContext(jsCode);

console.log('✓ Total cars in database:', CARS_DATABASE.length);
assert.strictEqual(CARS_DATABASE.length, 11);

// Test Categories
const cats = {};
CARS_DATABASE.forEach(c => cats[c.category] = (cats[c.category] || 0) + 1);
console.log('✓ Categories breakdown:', cats);
assert.strictEqual(cats['hatch'], 3);
assert.strictEqual(cats['suv-compact'], 4);
assert.strictEqual(cats['suv-mid'], 4);

// Test Search Filter
appState.searchQuery = 'kardian';
let filtered = getFilteredCars();
console.log('✓ Search "kardian":', filtered.length, 'cars');
assert.strictEqual(filtered.length, 4);

// Test Category Filter
appState.searchQuery = '';
appState.selectedCategory = 'hatch';
filtered = getFilteredCars();
console.log('✓ Category "hatch":', filtered.length, 'cars');
assert.strictEqual(filtered.length, 3);

// Test Transmission Filter
appState.selectedCategory = 'all';
appState.selectedTransmission = 'manual';
filtered = getFilteredCars();
console.log('✓ Transmission "manual":', filtered.length, 'cars');
assert.strictEqual(filtered.length, 4); // 3 Kwids + Kardian Vibe

// Test Price Sorting
appState.selectedTransmission = 'all';
appState.sortBy = 'price-asc';
filtered = getFilteredCars();
console.log('✓ Sort price-asc lowest:', filtered[0].name, filtered[0].priceDisplay);
console.log('✓ Sort price-asc highest:', filtered[filtered.length - 1].name, filtered[filtered.length - 1].priceDisplay);
assert.strictEqual(filtered[0].priceValue, 71090);
assert.strictEqual(filtered[filtered.length - 1].priceValue, 212725);

// Test WhatsApp URL Generator
const testUrl = generateWhatsAppUrl("Olá Mundo Teste 123");
console.log('✓ WhatsApp URL generated:', testUrl);
assert(testUrl.startsWith('https://wa.me/5569984215933?text='));

console.log('\n🎉 ALL JAVASCRIPT AUTOMATED TESTS PASSED 100%!');
