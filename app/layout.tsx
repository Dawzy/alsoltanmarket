import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

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
        <Image
          src="/background.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={50}
          priority
          className="absolute opacity-10 pointer-events-none max-w-[1440px] mx-auto z-0"
        />

        <Navbar />
        <div className="flex flex-col p-6 mx-auto w-full max-w-[1440px] h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
