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
  title: "Lovely Craft APK",
  description: "Download Lovely Craft APK for Android",
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