import Image from "next/image";
import backgroundImage from "@/public/background.jpg"

const Background = () => {
  return (
    <Image
      src={backgroundImage}
      alt="Storefront"
      placeholder="blur"
      fill
      quality={50}
      sizes="100vh"
      className="absolute opacity-10 pointer-events-none max-w-[1440px] mx-auto z-0 object-cover"
    />
  )
}
export default Background;