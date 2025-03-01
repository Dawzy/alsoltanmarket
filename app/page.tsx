import { HoursGroup, InfoGroup, ServicesGroup } from "@/components";


const Home = () => {
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col w-full h-min">
        <InfoGroup />
        <HoursGroup />
        <ServicesGroup />
      </div>
    </div>
  )
}
export default Home;