import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner'
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", '700', '800'],
  variable: "--font-inter",
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
          <body className={`${inter.variable} ${poppins.variable}`}>
            <Toaster richColors position="bottom-center" />
            <div className="flex flex-col justify-between items-stretch h-[100dvh] select-none">
              <Header />
              <div>
                {children}
              </div>
              <Footer />
            </div>
          </body>
      </Suspense>
    </html>
  );
}
