"use client"

import { ServiceHintProps } from "@/types";
import { useState } from "react";

const ServiceHint = ({ children, text }: ServiceHintProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="h-12 w-12 flex justify-center items-center cursor-pointer"
      >
        {children}
      </div>
      {visible &&
        <div className="absolute text-3xl top-full pointer-events-none text-center bg-white text-gray-900 px-2 py-1 rounded-md">
          {text}
        </div>
      }
    </>
  )
}
export default ServiceHint;