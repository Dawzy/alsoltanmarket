import { ServiceHint } from "@/components";
import { FaBitcoin, FaDollarSign, FaSmoking } from "react-icons/fa";
import { MdAtm } from "react-icons/md";

const Home = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex w-full h-min">
        {/* Services group */}
        <div className="relative flex gap-6 items-center text-5xl h-min w-full justify-center">
            <ServiceHint text="This location has an ATM service">
              <MdAtm className="text-8xl" />
            </ServiceHint>

            <ServiceHint text="This location has Crypto ATM services">
              <FaBitcoin />
            </ServiceHint>

            
            <ServiceHint text="This location has lottery services">
              <FaDollarSign />
            </ServiceHint>

            <ServiceHint text="This location has nicotine products">
              <FaSmoking />
            </ServiceHint>

        </div>
      </div>
    </div>
  )
}
export default Home;