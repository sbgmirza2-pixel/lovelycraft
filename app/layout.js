import { Bricolage_Grotesque, Figtree, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import BackToTop from "./components/BackToTop";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});
export const metadata = {
  title: "Lovely Craft APK Download v0.2.999 for Android (Latest Version)",
  description:
    "Explore Lovely Craft APK features, gameplay, piston mechanics, customization, requirements, safety tips, and everything you need to know before installing.",
   verification: {
  google: "-FwrITWWdqc11wn039-MW6afycqV_mEy5osgMy-6yCA",
},
  metadataBase: new URL("https://lovelycraftapk.org"),
  openGraph: {
    title: "Lovely Craft APK Download v0.2.999 for Android (Latest Version)",
    description:
      "Explore Lovely Craft APK features, gameplay, piston mechanics, customization, requirements, safety tips, and everything you need to know before installing.",
    url: "https://lovelycraftapk.org",
    siteName: "Lovely Craft APK",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Lovely Craft APK Gameplay Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovely Craft APK Download v0.2.999 for Android (Latest Version)",
    description:
      "Explore Lovely Craft APK features, gameplay, piston mechanics, customization, requirements, safety tips, and everything you need to know before installing.",
    images: ["/logo.jpg],"],
  },

};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable} ${pixelify.variable}`}>
      <body className="antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}