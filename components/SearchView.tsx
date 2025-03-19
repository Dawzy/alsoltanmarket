"use client"

import { LimitFilter, SearchBar, SearchCombobox } from "@/components";
import { AISLES, LIMITS, PARAMS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [term, setTerm] = useState("");
  const [aisle, setAisle] = useState("");
  const [limit, setLimit] = useState(LIMITS[0]);
  const [searchStatus, setSearchStatus] = useState("");

  useEffect(() => {
    updateResults();
  }, [aisle, limit]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const termParam = params.get(PARAMS.TERM);
    const aisleParam = params.get(PARAMS.AISLE);
    const limitParam = params.get(PARAMS.LIMIT);

    // Update search status string
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
    setTerm(termParam  || "");
    setAisle(aisleParam || "");
    setLimit( parseInt(limitParam || "10") );

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
      <div className="flex flex-col sm:flex-row w-full gap-3 justify-center items-center pb-2">
        <SearchBar onSearch={updateResults} value={term} setValue={setTerm} placeholder="Search in products..."/>
        <SearchCombobox list={AISLES} placeholder="Search in aisles..." value={aisle} setValue={setAisle} />
        <LimitFilter selected={limit} setSelected={setLimit}/>
      </div>
      {searchStatus !== "" &&
        <p className="text-2xl w-full font-bold text-center">
          <label className="hidden sm:inline">{searchStatus}.</label> <Link className="underline text-blue-400" href="/products">Clear search</Link>
        </p>
      }
    </>
  )
}
export default SearchView