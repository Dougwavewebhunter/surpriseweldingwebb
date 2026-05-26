export const SITE = {
  name: "Surprise Welding",
  tagline: "Maintenance, Construction & Metal Works",
  phone: "+27822898267",
  phoneDisplay: "+27 82 289 8267",
  whatsapp: "27822898267",
  email: "info@surprisewelding.co.za",
  address: "South Africa",
  domain: "www.surprisewelding.co.za",
  whatsappLink: (msg = "Hi Surprise Welding, I'd like a quote.") =>
    `https://wa.me/27822898267?text=${encodeURIComponent(msg)}`,
};

export const SERVICES = [
  { slug: "welding-construction", title: "Welding & Construction", desc: "Custom steel fabrication, structural welding and full construction builds.", icon: "Flame" },
  { slug: "men-gates", title: "Men Gates", desc: "Heavy-duty driveway and pedestrian gates, custom designed and installed.", icon: "DoorOpen" },
  { slug: "burglar-bars", title: "Burglar Bars", desc: "Secure burglar bars for windows and doors — protect what matters.", icon: "Shield" },
  { slug: "steel-carports", title: "Steel Carports", desc: "Durable steel carports built to last in any weather.", icon: "Car" },
  { slug: "palisade-fencing", title: "Palisade Fencing", desc: "Premium palisade fencing for residential and commercial properties.", icon: "Fence" },
  { slug: "roof-painting", title: "Roof Painting", desc: "Professional roof painting and waterproofing services.", icon: "PaintRoller" },
  { slug: "house-builds", title: "House Builds", desc: "Complete house construction from foundation to finish.", icon: "Home" },
];
