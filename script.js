let qty = 1;

function openWA(msg){
  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

function bookWaterless(){
  openWA(WA_TEXT.book(SERVICES.waterless.name));
}

function bookSlickBanaAddon(){
  openWA(WA_TEXT.askPrice(SERVICES.slickBanaAddon.name));
}

function changeQty(n){
  qty = Math.max(1, qty + n);
  document.getElementById("qty").value = qty;
}

function orderProduct(){
  openWA(WA_TEXT.orderProduct(PRODUCT.name, qty));
}
