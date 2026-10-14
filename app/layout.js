import { Bricolage_Grotesque, Figtree, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable} ${pixelify.variable}`}>
      <body className="font-sans antialiased bg-[#F5F9F1] text-[#15251B]">
        {children}
      </body>
    </html>
  );
}