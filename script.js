/* ================================
   HELPERS
================================ */
function openWhatsApp(message) {
  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);
  window.open(url, "_blank");
}

/* ================================
   BOOKING ACTIONS
================================ */
function bookWaterless() {
  openWhatsApp(
    WHATSAPP_TEMPLATE.booking(SERVICES.waterless.name)
  );
}

function bookSlickBanaAddon() {
  openWhatsApp(
    WHATSAPP_TEMPLATE.askPrice(SERVICES.slickBanaAddon.name)
  );
}

/* ================================
   MARKETPLACE RENDER
================================ */
function renderProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  PRODUCTS.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>

      <div class="qty-control">
        <button onclick="changeQty('${product.id}', -1)">-</button>
        <input id="qty-${product.id}" type="number" value="1" min="1" />
        <button onclick="changeQty('${product.id}', 1)">+</button>
      </div>

      <button class="primary"
        onclick="orderProduct('${product.id}')">
        Order via WhatsApp
      </button>
    `;

    container.appendChild(card);
  });
}

/* ================================
   QUANTITY CONTROL
================================ */
function changeQty(id, delta) {
  const input = document.getElementById("qty-" + id);
  let value = parseInt(input.value) || 1;
  value += delta;
  if (value < 1) value = 1;
  input.value = value;
}

/* ================================
   ORDER PRODUCT
================================ */
function orderProduct(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  const qtyInput = document.getElementById("qty-" + productId);
  const qty = qtyInput ? qtyInput.value : 1;

  openWhatsApp(
    WHATSAPP_TEMPLATE.orderProduct(product.name, qty)
  );
}

/* ================================
   GALLERY RENDER
================================ */
function renderGallery() {
  const beforeAfter = document.getElementById("before-after");
  const showcase = document.getElementById("showcase");

  if (beforeAfter) {
    GALLERY.beforeAfter.forEach((img) => {
      const i = document.createElement("img");
      i.src = img;
      beforeAfter.appendChild(i);
    });
  }

  if (showcase) {
    GALLERY.showcase.forEach((img) => {
      const i = document.createElement("img");
      i.src = img;
      showcase.appendChild(i);
    });
  }
}

/* ================================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderGallery();
});
