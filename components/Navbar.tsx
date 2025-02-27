"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <header className="w-full z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 text-4xl font-semibold">
        {/* Logo group */}
        <div className="flex">
          <Image
            src="/logo.jpg"
            alt="Logo"
            quality={10}
            width={50}
            height={50}
            priority
            className="object-contain rounded-full mr-2"
          />
          <h1 className="text-5xl">Al Soltan</h1>
        </div>

        {/* Button group */}
        <div className="flex gap-10">
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