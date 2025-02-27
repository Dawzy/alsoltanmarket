import { ButtonProps } from "@/types";

const Button = ({ text, onClick, width, isSecondary }: ButtonProps) => {
  
  const primary = "bg-gray-800 text-white";
  const secondary = "bg-white text-black";
  
  return (
    <button
      className={`border-2 border-gray-800  px-4 py-2 rounded-xl ${isSecondary ? secondary : primary} w-${width}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
export default Button