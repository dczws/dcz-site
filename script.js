
const products = [
  "Nossi Pin (Sheet) - Qty: 100",
  "Spiral Cable Protector - Qty: 30",
  "Mini Boost 4 Bluetooth Speaker - Qty: 2",
  "USB Card Reader - Qty: 20",
  "Super X Tempered Glass - Qty: 100",
  "Chocolate Cover (Mix Models Lot) - Qty: 157",
  "2-in-1 OTG Adapter - Qty: 10",
  "OTG Type C Metal Tukra - Qty: 10",
  "OTG V8 Tukra - Qty: 40",
  "Bluetooth Speaker (10W) with Stand - Qty: 2",
  "Neckband for Boat BT Max - Qty: 3",
  "Speaker Jali - Qty: 100",
  "Samsung 25W Charger - Qty: 5",
  "Realme Magnet Buds 2 - Qty: 10",
  "Earphone Rubber Sheet - Qty: 100",
  "K8 Bluetooth Mic - Qty: 3",
  "Smart Watch Wireless Charger - Qty: 8",
  "Wireless Headphone P9 - Qty: 4",
  "Airbuds for Apple Pro A - Qty: 10",
  "Mobile Holder Pyramid Stand - Qty: 20",
  "Airpods Apple Pro 1st Gen - Qty: 2",
  "Airbuds T12 Max V5.3 - Qty: 5",
  "Aux Cable Metal Imported - Qty: 10",
  "Data Cable iPhone 16 (65W) - Qty: 10"
];

function searchProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = products.filter(p => p.toLowerCase().includes(query));
  renderProducts(filtered);
}

function renderProducts(list) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  list.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerText = p;
    productList.appendChild(div);
  });
}

// Initial load
renderProducts(products);
