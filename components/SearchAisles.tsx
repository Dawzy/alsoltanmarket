"use client"

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import { SearchAisleProps } from "@/types";
import { Fragment, useState } from "react";
import { Aisles } from "@/constants";
import { BiSearch } from "react-icons/bi";

const SearchAisles = ({ aisle, setAisle }: SearchAisleProps) => {
  const [query, setQuery] = useState("");

  const filteredAisles = (query === "") ?
  Aisles :
  Aisles.filter(item => item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")));

  return (
    <div className="w-full max-sm:w-full flex justify-start items-center">
      <Combobox value={aisle} onChange={setAisle}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-1/4 right-2 text-gray-900 flex items-center">
            <BiSearch className="text-3xl h-full" />
          </ComboboxButton>
          <ComboboxInput
            className="w-full h-[48px] p-4 rounded-md max-sm:rounded-full bg-gray-200 outline-none text-sm text-gray-900"
            placeholder="search"
            displayValue={(aisle: string) => aisle}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredAisles.map(item => (
                <ComboboxOption
                key={item}
                className={({focus}) => `${focus ? "bg-blue-400 text-white" : "text-gray-900 bg-white"} relative cursor-default select-none py-2 pl-10 pr-4`}
                value={item}
                >
                  {item}
                </ComboboxOption>
              ))
              }
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
export default SearchAisles;