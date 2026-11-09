import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import CartBar from "@/components/cart/CartBar";
import CartDrawer from "@/components/cart/CartDrawer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // lets the mobile bar respect the iPhone home indicator
  themeColor: "#1c1411",
};

export const metadata: Metadata = {
  title: "Saravanas Pure Veg Restaurant | Authentic Taste, Timeless Tradition",
  description:
    "Traditional South Indian recipes, cooked fresh every day in a 100% pure vegetarian kitchen. Order dosa, idli, thali, sweets and filter coffee from Saravanas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      {/* Bottom padding on phones keeps content clear of the fixed action bar */}
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink pb-[calc(3.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileActionBar />
          <CartBar />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
