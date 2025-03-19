import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

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
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onSearch?: () => void;
}

export interface SearchComboboxProps extends SearchBarProps {
  list: string[];
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