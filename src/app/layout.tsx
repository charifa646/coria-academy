import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, Gelasio } from "next/font/google";
import "./coria.css";

// Charifa's choice (19 October 2026, font board « B »): Bricolage Grotesque for the titles, DM Sans for the text.
// Gelasio is only the stand-in for Georgia in the drawn « ORA » site on the first card; it is not preloaded.
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--font-bricolage", display: "swap" });
const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans", display: "swap" });
const gelasio = Gelasio({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-gelasio", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Crée ce que tu imagines · Masterclass Claude Code",
  description:
    "Masterclass live Claude Code avec Charifa. De la maquette au site web professionnel. Dimanche 25 octobre 2026 à 19h30 (heure du Burkina), en direct sur Zoom. Pass : 5 000 FCFA.",
  // closed to search engines until Charifa says « publie »
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#f34c07" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the script below adds a class to <html> before React starts
    <html lang="fr" className={`${bricolage.variable} ${dmsans.variable} ${gelasio.variable}`} suppressHydrationWarning>
      <head>
        {/* the blocks that appear on scroll start hidden only when motion is welcome and this script ran */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(window.matchMedia("(prefers-reduced-motion: no-preference)").matches)document.documentElement.classList.add("anim")`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
