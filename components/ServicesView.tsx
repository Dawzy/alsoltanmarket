import { FaBitcoin, FaDhl } from "react-icons/fa";
import { MdAtm } from "react-icons/md";

import Image from "next/image";
import NILogo from "@/public/NILogo.jpg";
import { FaUps } from "react-icons/fa6";

const ServicesView = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <p className="text-center text-4xl font-bold">Services:</p>
      <hr className="border-2 rounded-full" />
      <div className="flex items-center text-8xl w-full justify-center *:max-w-16 *:max-h-16 flex-wrap">
        <MdAtm className="mx-6 text-8xl scale-150" />
        <FaBitcoin className="mr-3" />
        <FaUps />
        <FaDhl className="mx-6 text-8xl scale-150" />
        <Image className="rounded-full" src={NILogo} alt="Neighbour's Express" width={64} height={64} />
      </div>
    </div>
  )
}
export default ServicesView