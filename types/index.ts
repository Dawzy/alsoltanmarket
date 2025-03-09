import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

export interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  width?: string;
  isSecondary?: boolean;
};

export interface ServiceHintProps {
  children: ReactNode;
  text: string;
}

export interface FilterProps {
  term: string;
  aisle: string;
  limit: number;
}

export interface ProductPageProps {
  searchParams: FilterProps;
}

export interface ProductCardProps {
  product: Product;
}

export interface SearchBarProps {
  list: string[];
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export interface LimitFilterProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

export type Product = {
  name: string;
  imgUrl: string;
  aisles: string[];
}