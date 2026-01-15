const WHATSAPP_NUMBER = "60167003569";

const SERVICES = {
  waterless: {
    name: "XD Waterless – Pure Wash",
    price: { S:20, M:25, L:30, XL:35 }
  },
  slickBanaAddon: {
    name: "Wash & Wax – Slick Bana 🍌",
    note: "Harga ikut model & saiz kereta"
  }
};

const PRODUCT = {
  name: "Slick Bana 🍌 Bottle"
};

const IMAGES = {
  hero: "IMG-20260115-WA0039.jpg",
  bottle: "file_0000000092e87208968d22fdb0ee59ce.png",
  beforeAfter: "IMG_20260113_015550.jpg",
  showcase: ["IMG-20260115-WA0040.jpg","IMG-20260115-WA0042.jpg"]
};

const WA_TEXT = {
  book(service){
    return `BOOKING SERVIS:
${service}

Model Kereta:
Saiz (S/M/L/XL):
Lokasi:
Tarikh:`;
  },
  askPrice(item){
    return `TANYA HARGA:
${item}

Model Kereta:
Saiz (S/M/L/XL):`;
  },
  orderProduct(name, qty){
    return `ORDER PRODUK:
${name}
Quantity: ${qty}

Nama:
Alamat:`;
  }
};
