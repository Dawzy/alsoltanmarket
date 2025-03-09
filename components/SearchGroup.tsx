"use client"

import { LimitFilter, SearchBar } from "@/components";
import { AISLES, LIMITS, PARAMS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input, Button } from "@headlessui/react";

const SearchGroup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [term, setTerm] = useState("");
  const [aisle, setAisle] = useState("");
  const [limit, setLimit] = useState(LIMITS[0]);

  useEffect(() => {
    updateResults()
  }, [aisle, limit])

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const termParam = params.get(PARAMS.TERM) || "";
    const aisleParam = params.get(PARAMS.AISLE) || "";
    const limitParam = params.get(PARAMS.LIMIT) || "10";
    
    setTerm(termParam)
    setAisle(aisleParam);
    setLimit( parseInt(limitParam) )

  }, [searchParams])

  const updateResults = () => {
    // Get current
    const params = new URLSearchParams(searchParams);

    // Add term
    if (term !== "")
      params.set(PARAMS.TERM, term);
    else
      params.delete(PARAMS.TERM);

    // Add aisle
    if (aisle !== "")
      params.set(PARAMS.AISLE, aisle);
    else
      params.delete(PARAMS.AISLE);

      // Add limit
    if (limit !== LIMITS[0]) // LIMITS[0] is default value
      params.set(PARAMS.LIMIT, limit.toString());
    else
      params.delete(PARAMS.LIMIT);

    // Re-route
    const newPathname = `${window.location.pathname}?${params.toString()}`
    router.push(newPathname);
  }

  return (
    <>
      <div className="flex w-full gap-3 items-center">
        <div className="w-1/2 input p-4 flex items-center justify-between z-10">
          <Input
            className="bg-transparent w-full outline-none"
            placeholder="Search in products..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <Button
            className="bg-transparent border-l-2 border-gray-300 pl-2"
            onClick={updateResults}
          >
            Search
          </Button>
        </div>
        <SearchBar list={AISLES} placeholder="Search in aisles..." value={aisle} setValue={setAisle} />
        <LimitFilter selected={limit} setSelected={setLimit}/>
        <p className="text-center font-bold text-lg">
          *Not all products are listed. For inquiries on prices or availability, call during open hours.
        </p>
      </div>
      {/* {(term !== "" || aisle !== "") &&
        <p className="text-2xl w-full font-bold text-center">
          {`Showing results for ${term} in ${aisle}. `}
          <Link className="underline text-blue-400" href="/products">Clear search</Link>
        </p>
      } */}
    </>
  )
}
export default SearchGroup