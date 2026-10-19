import type { Metadata, Viewport } from "next";
import { Arimo, Gelasio } from "next/font/google";
import "./coria.css";

// The mockup's type is Arial and Georgia. Phones without them (Android) get their free twins, with the same
// measures: Arimo for Arial, Gelasio for Georgia. Not preloaded: a computer that has Arial and Georgia never
// downloads them.
const arimo = Arimo({ subsets: ["latin"], variable: "--font-arimo", display: "swap", preload: false });
const gelasio = Gelasio({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-gelasio",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Crée ce que tu imagines · Masterclass Claude Code",
  description:
    "Masterclass live Claude Code avec Charifa. De la maquette au site web professionnel. Dimanche 25 octobre 2026 en ligne. Pass : 5 000 FCFA.",
  // closed to search engines until Charifa says « publie »
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#f34c07" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${arimo.variable} ${gelasio.variable}`}>
      <body>{children}</body>
    </html>
  );
}
