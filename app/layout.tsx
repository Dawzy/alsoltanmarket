import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import { Background, Footer, Navbar } from "@/components";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const bitterFont = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Al Soltan Market",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bitterFont.variable} antialiased md:h-screen md:flex flex-col`} >
        <Toaster />
        <Background />
        <Navbar />
        <div className="flex flex-col px-4 sm:px-12 pt-6 mx-auto w-full max-w-[1440px] h-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
