const WHATSAPP = "60167003569"; // tukar kalau perlu

function orderService(service){
  const msg = `Saya nak booking ${service}.
Model kereta:
Lokasi:
Tarikh:`;
  openWA(msg);
}

function askPrice(){
  const msg = `Saya nak tanya harga Slick Bana 🍌.
Model kereta saya:`;
  openWA(msg);
}

function orderProduct(){
  const qty = document.getElementById("qty").value;
  const msg = `Order Slick Bana 🍌
Quantity: ${qty}`;
  openWA(msg);
}

function openWA(msg){
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
  );
}
