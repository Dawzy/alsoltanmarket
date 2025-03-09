"use client"

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { GrClose } from "react-icons/gr";
import { hasSubstring } from "@/utils";
import { SearchBarProps } from "@/types";

const SearchBar = ({ paramName, list, placeholder }: SearchBarProps) => {
  const router = useRouter();
  const [item, setItem] = useState<string | null>("");
  const [query, setQuery] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  
  // List of items to autocomplete
  const filterdItems = (query === "") ?
  list :
  list.filter(item => hasSubstring(item, query));
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearchParams( item?.toLowerCase() || query?.toLowerCase() );
  }

  const updateSearchParams = (item: string | null) => {
    const searchParams = new URLSearchParams(window.location.search);

    // Update search param
    if (item) {
      searchParams.set(paramName, item);
    } else {
      searchParams.delete(paramName);
    }

    // Re-route
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname);
  }

  const onClearSearch = () => {
    // Clear query
    setItem("")
    setQuery("");
    updateSearchParams(null);
  }
  
  return (
    <form ref={formRef} className="flex items-center justify-start max-sm:flex-col w-1/2 relative max-sm:gap-4 max-w-3xl" onSubmit={handleSearch}>
      <div className="w-full max-sm:w-full flex justify-start items-center relative">
        <div className="w-full max-sm:w-full flex justify-start items-center">
          <Combobox value={item} onChange={setItem}>
            <div className="relative w-full">
              {/* Buttons Group */}
              <div className="absolute top-1/4 right-2 text-gray-900 flex w-min justify-center items-center gap-2 cursor-pointer">
                { (query !== "" || item !== "") && 
                  <button className="flex items-center" onClick={onClearSearch}>
                    <GrClose className="text-2xl h-full" />
                  </button>
                }
                <ComboboxButton className="flex items-center" type="submit">
                  <BiSearch className="text-3xl h-full" />
                </ComboboxButton>
              </div>

              {/* Input */}
              <ComboboxInput
                className="w-full input p-4 outline-none"
                placeholder={placeholder || "search"}
                displayValue={(value: string) => value}
                onChange={(e) => setQuery(e.target.value)}
              />

              {/* Options Group */}
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                // afterLeave={() => setQuery("")}
              >
                <ComboboxOptions className="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filterdItems.map(item => (
                    <ComboboxOption
                    key={item}
                    className={({focus}) => `${focus ? "bg-blue-400 text-white" : "text-gray-900 bg-white"} relative cursor-default select-none py-2 pl-10 pr-4`}
                    value={item}
                    >
                      {item}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Transition>
            </div>
          </Combobox>
        </div>
      </div>
    </form>
  )
}

export default SearchBar;