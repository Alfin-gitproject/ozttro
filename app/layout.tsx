import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "OZTTRO — Premium Global Spice Exports",
  description:
    "OZTTRO delivers world-class spices sourced from the finest farms, exported with precision to over 40 countries. Premium Cardamom, Black Pepper, Cinnamon and more.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen font-['Manrope']">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
