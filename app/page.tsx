import { HoursGroup, ServicesGroup } from "@/components";

const Home = () => {
  return (
    <div className="mt-12 flex flex-col w-full h-full justify-between items-between gap-7">
      <p className="font-bold text-4xl italic text-center">"Family owned convenience store with an emphasis on convenience!"</p>
      <div className="flex justify-between items-start">
        <ServicesGroup />
        <HoursGroup />
      </div>
    </div>
  )
}

export default Home;