import { ServiceHint } from "@/components";
import { FaBitcoin, FaDollarSign, FaSmoking } from "react-icons/fa";
import { MdAtm } from "react-icons/md";

const ServicesGroup = () => {
  return (
    <div className="relative flex gap-6 items-center text-5xl h-min w-full justify-center">
      <ServiceHint text="This location has an ATM service">
        <MdAtm className="text-8xl" />
      </ServiceHint>

      <ServiceHint text="This location has a Crypto ATM service">
        <FaBitcoin />
      </ServiceHint>
      
      <ServiceHint text="This location has lottery services">
        <FaDollarSign />
      </ServiceHint>

      <ServiceHint text="This location offers nicotine products">
        <FaSmoking />
      </ServiceHint>
  </div>
  )
}
export default ServicesGroup