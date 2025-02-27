import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  width?: string;
  isSecondary?: boolean;
};

export interface InputProps {
  value: string;
  setValue: (value: string) => void;
  type?: "password" | "search";
  label?: string;
  width: string;
  placeholder?: string;
};

export interface SearchAisleProps {
  aisle: string;
  setAisle: (aisle: string) => void;
};

export interface FilterProps {
  items: string[];
  withNoneOption: boolean;
}

export interface Product {
  name: string;
}