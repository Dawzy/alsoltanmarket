import { ServicesView, HoursView } from "@/components";

const Home = () => {
  return (
    <div className="sm:mt-12 flex flex-col w-full h-full justify-around items-between gap-10">
      <p className="text-xl md:text-4xl font-bold italic text-center">
        "Family owned convenience store with an emphasis on convenience!"
      </p>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start">
        <ServicesView />
        <HoursView />
      </div>
    </div>
  )
}

export default Home;