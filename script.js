let qty = 1;

document.getElementById("basicPrice").innerText = SERVICE.basicFrom;
document.getElementById("productName").innerText = PRODUCT.name;
document.getElementById("productPrice").innerText = PRODUCT.price;

function changeQty(n){
  qty += n;
  if(qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
}

function bookService(){
  const msg =
`Hi XD Waterless,
Saya nak booking servis.

Model kereta:
Lokasi:
Tarikh:
Masa:`;
  openWA(msg);
}

function orderProduct(){
  const total = qty * PRODUCT.price;
  const msg =
`Hi XD Waterless,
Saya nak order ${PRODUCT.name}.

Quantity: ${qty}
Harga seunit: RM${PRODUCT.price}
Total: RM${total}

Delivery / Pickup:
Nama:
Alamat:`;
  openWA(msg);
}

function openWhatsApp(customMsg){
  const text = encodeURIComponent(customMsg || "Hi XD Waterless");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,"_blank");
}
