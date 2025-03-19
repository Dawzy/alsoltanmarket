"use client"

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { hasSubstring } from "@/utils";
import { SearchComboboxProps } from "@/types";
import { FaSearch } from "react-icons/fa";

const SearchCombobox = ({ list, placeholder, value, setValue }: SearchComboboxProps) => {
  const [query, setQuery] = useState(value);
  
  // List of items to autocomplete
  const filterdItems = (query === "") ? list : list.filter(item => hasSubstring(item, query));

  return (
    <Combobox value={value} onChange={(newValue: string) => setValue(newValue || "")} as="div"
    className="relative w-full lg:w-1/3 max-sm:flex-col max-sm:gap-4 max-sm:w-full flex items-center max-w-xl">
      <div className="relative w-full">
        <div className="w-full input p-4 flex items-center justify-between z-10">
          <ComboboxInput
            autoComplete="off"
            className="w-full input outline-none"
            placeholder={placeholder || "search"}
            displayValue={(val: string) => val}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ComboboxButton className="bg-transparent lg:border-l-2 border-gray-300 pl-2">
            <label className="hidden lg:inline">Search</label>
            <FaSearch className="lg:hidden text-2xl"/>
          </ComboboxButton>
        </div>

        {/* Options Group */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ComboboxOptions className="empty:invisible z-20 absolute mt-1 w-full rounded-md bg-white py-1 text-base focus:outline-none sm:text-sm">
            {filterdItems.map(item => (
              <ComboboxOption key={item} value={item}
                className="data-[focus]:bg-blue-400 data-[focus]:text-white text-gray-900 bg-white cursor-default select-none py-2 pl-10 pr-4"
              >
                {item}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </div>
    </Combobox>
  )
}

export default SearchCombobox;