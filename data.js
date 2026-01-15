/* ================================
   GLOBAL CONFIG
================================ */
const WHATSAPP_NUMBER = "60167003569";

/* ================================
   BRAND
================================ */
const BRAND = {
  name: "XD Waterless",
  tagline: "Clean • Shine • Protect"
};

/* ================================
   SERVICES (BOOKING)
================================ */
const SERVICES = {
  waterless: {
    name: "XD Waterless – Pure Wash",
    description: "Clean only (tanpa wax, tanpa bau kuat)",
    price: {
      S: 20,
      M: 25,
      L: 30,
      XL: 35
    }
  },

  slickBanaAddon: {
    name: "Slick Bana 🍌 Add-On",
    description: "Wax + Bau + Extra Kilat",
    note: "Harga ikut model kereta"
  }
};

/* ================================
   VEHICLE SIZE REFERENCE
================================ */
const VEHICLE_SIZE = {
  S: ["Axia", "Myvi", "Saga", "Iriz", "Vios (lama)"],
  M: ["City", "Vios", "Civic", "Persona", "Altis"],
  L: ["X50", "X70", "HR-V", "CR-V", "Alza", "Rush"],
  XL: ["Alphard", "Vellfire", "Serena", "Hiace", "SUV besar"]
};

/* ================================
   PRODUCTS (MARKETPLACE)
================================ */
const PRODUCTS = [
  {
    id: "slick-bana-bottle",
    name: "Slick Bana 🍌 Bottle",
    description: "Waterless Wash + Wax",
    image: "file_0000000092e87208968d22fdb0ee59ce.png",
    price: "Tanya Harga"
  }
];

/* ================================
   BEFORE / AFTER IMAGES
================================ */
const GALLERY = {
  beforeAfter: [
    "IMG_20260113_015550.jpg"
  ],
  showcase: [
    "IMG-20260115-WA0039.jpg",
    "IMG-20260115-WA0040.jpg",
    "IMG-20260115-WA0042.jpg"
  ]
};

/* ================================
   WHATSAPP MESSAGE TEMPLATE
================================ */
const WHATSAPP_TEMPLATE = {
  booking(serviceName) {
    return `BOOKING SERVIS:
${serviceName}

Nama:
Lokasi:
Model Kereta:
Tarikh:`;
  },

  askPrice(itemName) {
    return `TANYA HARGA:
${itemName}

Model Kereta:`;
  },

  orderProduct(productName, qty) {
    return `ORDER PRODUK:
${productName}
Quantity: ${qty}

Nama:
Alamat:`;
  }
};
