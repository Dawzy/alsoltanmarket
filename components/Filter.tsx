"use client"

import { Select } from "@headlessui/react";
import { FilterProps } from "@/types";
import { useState } from "react";

const Filter = ({ items, withNoneOption }: FilterProps) => {
  const [value, setValue] = useState("");

  items = withNoneOption ? ["Filter", ...items] : items;
  items = items.filter(item => item.replace(/\s+/g, "").length > 0);

  return (
    <Select onChange={(e) => setValue(e.target.value)} className="bg-gray-200 text-gray-900 rounded-md px-4 z-10">
      {items.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  )
}
export default Filter;