import { ProductCardProps } from "@/types";
import Image from "next/image";

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, imgUrl, aisles } = product;

  return (
    <div className="relative w-[var(--item-width)] h-[var(--item-width)]">
      {/* <p className="absolute">{name}</p> */}
      <Image
        className="rounded-full bg-white w-full h-full object-contain"
        src={"/ProductImages" + imgUrl}
        alt={name}

        // MUST BE SAME AS --item-width
        width={250}
        height={250}
        sizes="full"
      />
    </div>
  )
}
export default ProductCard;