"use client"

import { useState } from "react"
import SearchAisles from "./SearchAisles";

const SearchBar = () => {
  const [aisle, setAisle] = useState("");
  const handleSearch = () => {}

  return (
    <form className="flex items-center justify-start max-sm:flex-col w-1/2 relative max-sm:gap-4 max-w-3xl" onSubmit={handleSearch}>
      <div className="w-full max-sm:w-full flex justify-start items-center relative">
        <SearchAisles
          aisle={aisle}
          setAisle={setAisle}
        />
      </div>
    </form>
  )
}
export default SearchBar;