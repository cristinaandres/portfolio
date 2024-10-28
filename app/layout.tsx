import React from 'react';
import type { Metadata } from "next";
import { Inter, Poppins, Libre_Bodoni } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner'
import { Suspense } from "react";
import Providers from "@/components/Providers";
import Menu from "@/components/Menu";
import Template from "./template";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", '700', '800'],
  variable: "--font-inter",
});

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: ["400", "500", "600", '700'],
  variable: "--font-bodoni",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", '700', '800'],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio Cristina",
  description: "Portfolio from Cristina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Suspense>
        <body className={`${inter.variable} ${poppins.variable} ${bodoni.variable}`}>
          <Providers>
            <Toaster richColors position="bottom-center" />
            <Menu />
            <Header />
            <main className="min-h-screen overflow-hidden">
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </Suspense>
    </html>
  );
}
