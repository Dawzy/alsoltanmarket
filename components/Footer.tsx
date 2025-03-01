import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-col mt-1 border-t border-gray-100 bg-[#171717] z-10">
    <div className="relative flex max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10 w-full justify-center">
      <Image src="/logo.jpg" alt="logo" width={50} height={25} className="object-contain rounded-full absolute left-5" />

      <div className="flex flex-col gap-6 text-base min-w-[170px] items-center">
        <h3 className="font-bold">Socials</h3>
        <div className="flex gap-5">
          <Link href="/" className="text-gray-500">
            Facebook
          </Link>

          <Link href="/" className="text-gray-500">
            Instagram
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;