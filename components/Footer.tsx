import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-col mt-1 border-t border-gray-100 bg-[#171717] z-20">
    <div className="relative flex max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10 w-full justify-center text-gray-500">
      <Image src="/logo.jpg" alt="logo" width={50} height={25} className="object-contain rounded-full absolute left-5" />

      <div className="flex flex-col gap-3 text-base min-w-[170px] items-center text-center ">
        <h3 className="font-bold text-gray-200">Socials</h3>
        <div className="flex flex-col gap-2 justify-center">
          <Link href="/"> Facebook </Link>
          <Link href="/"> Instagram </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-base min-w-[170px] items-center text-center">
        <h3 className="font-bold text-gray-200">Details</h3>
        <div className="flex flex-col gap-2 justify-center text-center">
          <p>905-234-4144</p>
          <p>Burlington, ON L7T 2E6</p>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;