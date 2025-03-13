"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <header className="w-full z-10">
      <nav className="max-w-[1440px] flex-col sm:flex-row mx-auto flex sm:justify-between sm:items-center sm:px-12 px-6 py-4 text-xl sm:text-2xl md:text-3xl font-semibold">
        {/* Logo group */}
        <div className="flex flex-col sm:flex-row items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            quality={10}
            width={50}
            height={50}
            priority
            className="object-contain rounded-full mr-2"
          />
          <h1 className="text-3xl md:text-4xl">Al Soltan Market</h1>
        </div>

        {/* Button group */}
        <div className="flex justify-center gap-10 items-center mt-2 sm:mt-0 ">
          <Link href="/" className={`flex justify-center items-center ${pathname === "/" ? "underline" : ""}`}>
            Home
          </Link>
          <Link href="/products" className={`flex justify-center items-center ${pathname === "/products" ? "underline" : ""}`}>
            Products
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;