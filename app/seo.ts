import { restaurant } from "./data";

// Set SITE_URL to the final public HTTPS origin when publishing.
const configuredUrl = process.env.SITE_URL?.trim();
export const siteUrl = configuredUrl && /^https:\/\/[^/]+\/?$/.test(configuredUrl)
  ? configuredUrl.replace(/\/$/, "")
  : undefined;

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  description: "Restaurante de comida peruana en Leoncio Prado, Ancón. Menú criollo, picantería y cevichería. Atención en salón y pedidos para recoger.",
  telephone: `+${restaurant.phone}`,
  servesCuisine: ["Peruana", "Criolla", "Picantería", "Cevichería"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Leoncio Prado, Mz. 78 Lt. 23",
    addressLocality: "Ancón",
    addressRegion: "Lima",
    postalCode: "15123",
    addressCountry: "PE",
  },
  geo: { "@type": "GeoCoordinates", latitude: -11.7321775, longitude: -77.1425642 },
  hasMap: restaurant.maps,
  paymentAccepted: "Efectivo, Yape, Plin, Tarjetas",
  ...(siteUrl ? {
    "@id": `${siteUrl}/#restaurante`,
    url: siteUrl,
    image: `${siteUrl}/images/fachada.png`,
    hasMenu: `${siteUrl}/#carta`,
  } : {}),
  // Closing time, reviews and individual dish prices are not confirmed.
};
