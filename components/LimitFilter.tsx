"use client"

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { LIMITS } from "@/constants";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { LimitFilterProps } from "@/types";

const LimitFilter = ({ selected, setSelected }: LimitFilterProps) => {

  return (
    <Listbox value={selected} onChange={(newValue: number) => setSelected(newValue)}>
      <ListboxButton className="relative input min-w-20 w-full sm:w-min flex justify-center items-center gap-2">
        <p className="absolute left-4">{selected}</p>
        <FaChevronDown
          className="pointer-events-none absolute right-3"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className="w-20 bg-gray-200 rounded-lg"
      >
        {LIMITS.map(limit => (
          <ListboxOption
            key={limit}
            value={limit}
            className="flex cursor-default text-gray-900  justify-end items-center gap-2 py-1.5 px-2 data-[focus]:text-white data-[focus]:bg-gray-900"
          >
            <FaCheck className={`${selected !== limit && "display: hidden"}`} />
            <div className="text-base">{limit}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
export default LimitFilter;