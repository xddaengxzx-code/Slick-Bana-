/* =========================
   script.js  (MATCH data.js)
   ========================= */

let qty = 1;

/* OPEN WHATSAPP */
function wa(msg){
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}

/* BOOK SERVICE */
function bookService(serviceKey){
  const s = SERVICES[serviceKey];
  wa(
`Booking Servis:
${s.name}

Saiz Kereta (S/M/L/XL):
Model Kereta:
Lokasi:
Tarikh:`
  );
}

/* ASK PRICE (ADD-ON) */
function askPrice(){
  wa(
`Tanya Harga Slick Bana 🍌
Model Kereta:
Saiz (S/M/L/XL):`
  );
}

/* QUANTITY CONTROL */
function changeQty(n){
  qty = Math.max(1, qty + n);
  const el = document.getElementById("qty");
  if(el) el.value = qty;
}

/* ORDER PRODUCT */
function orderProduct(){
  const p = PRODUCTS.slickBanaBottle;
  const total = qty * p.price;
  wa(
`Order Produk:
${p.name}

Quantity: ${qty}
Harga Seunit: RM${p.price}
Total: RM${total}

Delivery / Pickup:
Nama:
Alamat:`
  );
}
