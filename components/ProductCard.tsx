import { ProductCardProps } from "@/types";
import Image from "next/image";

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, imgUrl } = product;

  return (
    <div className="relative w-[var(--item-width)] h-[var(--item-width)]">
      <p className="absolute text-base font-black left-2 right-2 text-left bottom-2 text-gray-200 bg-black/50 p-2 rounded-3xl">{name}</p>
      <Image
        className="rounded-3xl bg-white w-full h-full object-contain"
        src={"/ProductImages" + imgUrl}
        alt={name}

        // MUST BE SAME AS --item-width
        width={250}
        height={250}
        quality={50}
        sizes="full"
      />
    </div>
  )
}
export default ProductCard;