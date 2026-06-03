import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const asimovian = localFont({
  src: "../../public/Asimovian-Regular.ttf",
  variable: "--font-asimovian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EICAD Group | Architecture & Design Platform",
  description:
    "Designing spaces that inspire. Architecture, construction, interior design, and renovation — Tunisia, Canada, and worldwide online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${outfit.variable} ${asimovian.variable} ${outfit.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
