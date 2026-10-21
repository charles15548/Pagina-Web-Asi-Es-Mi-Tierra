import type { Metadata, Viewport } from "next";
import { siteUrl } from "./seo";
import "./globals.css";

const title = "Así es mi Tierra | Restaurante de comida peruana en Ancón";
const description = "Menú criollo a S/10, picantería y cevichería en Leoncio Prado, Ancón. Revisa la carta, encuentra cómo llegar o pide para recoger por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Restaurante Así es mi Tierra",
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } } : {}),
  openGraph: {
    title,
    description,
    siteName: "Restaurante Así es mi Tierra",
    locale: "es_PE",
    type: "website",
    ...(siteUrl ? { url: siteUrl, images: [{ url: `${siteUrl}/images/fachada.jpeg`, width: 1600, height: 1200, alt: "Restaurante Así es mi Tierra en Ancón" }] } : {}),
  },
  twitter: { card: "summary", title, description },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#17533b", colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es-PE"><body>{children}</body></html>;
}
