"use client"

import { LimitFilter, SearchComboBar } from "@/components";
import { AISLES, LIMITS, PARAMS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input, Button } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";

const SearchGroup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [term, setTerm] = useState("");
  const [aisle, setAisle] = useState("");
  const [limit, setLimit] = useState(LIMITS[0]);
  const [searchStatus, setSearchStatus] = useState("");

  useEffect(() => {
    updateResults();
  }, [aisle, limit])

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const termParam = params.get(PARAMS.TERM);
    const aisleParam = params.get(PARAMS.AISLE);
    const limitParam = params.get(PARAMS.LIMIT);

    // Update search status
    let newStatus = "";
    if (termParam || aisleParam) {
      newStatus = "Showing results ";
      if (termParam)
        newStatus += `for "${termParam}"`;
      if (aisleParam)
        newStatus += ` in ${aisleParam}`;
    }
    setSearchStatus(newStatus);
    
    // Update states
    setTerm(termParam  || "")
    setAisle(aisleParam || "");
    setLimit( parseInt(limitParam || "10") )

  }, [searchParams]);

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
      <div className="flex flex-col sm:flex-row w-full gap-3 items-center">
        <div className="w-full lg:w-1/2 input p-4 flex items-center justify-between z-10">
          <Input
            className="bg-transparent w-full outline-none"
            placeholder="Search in products..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <Button
            className="bg-transparent lg:border-l-2 border-gray-300 pl-2"
            onClick={updateResults}
          >
            <label className="hidden lg:inline">Search</label>
            <FaSearch className="lg:hidden text-2xl"/>
          </Button>
        </div>
        <SearchComboBar list={AISLES} placeholder="Search in aisles..." value={aisle} setValue={setAisle} />
        <LimitFilter selected={limit} setSelected={setLimit}/>
        <p className="text-center font-bold text-lg">
          *Not all products are listed. For inquiries on prices or availability, call during open hours.
        </p>
      </div>
      {searchStatus !== "" &&
        <p className="text-2xl w-full font-bold text-center">
          <label className="hidden sm:inline">{searchStatus}.</label> <Link className="underline text-blue-400" href="/products">Clear search</Link>
        </p>
      }
    </>
  )
}
export default SearchGroup