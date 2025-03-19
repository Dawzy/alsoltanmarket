"use client";

import { SearchBarProps } from "@/types";
import { Input, Button } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, setValue, placeholder, onSearch }: SearchBarProps) => {
  return (
    <div className="w-full lg:w-1/3 input p-4 flex items-center justify-between z-10">
      <Input
        className="bg-transparent w-full outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== "" &&
        <Button className="bg-transparent" onClick={() => setValue("")}>
          <AiOutlineClose className="text-2xl"/>
        </Button>
      }
      <Button
        className="bg-transparent lg:border-l-2 border-gray-300 pl-2"
        onClick={onSearch}
      >
        <label className="hidden lg:inline">Search</label>
        <FaSearch className="lg:hidden text-2xl"/>
      </Button>
    </div>
  )
}
export default SearchBar;