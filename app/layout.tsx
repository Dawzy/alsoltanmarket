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
    <html lang="en" className="h-screen">
      <body className={`${bitterFont.variable} antialiased h-full flex flex-col`} >
        <Toaster />
        <Background />
        <Navbar />
        <div className="flex flex-col p-6 mx-auto w-full max-w-[1440px] h-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
