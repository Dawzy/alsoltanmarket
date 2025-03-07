import { MouseEventHandler, ReactNode } from "react";

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
  limit: number;
}

export interface ProductPageProps {
  searchParams: FilterProps;
}

export type Product = {
  name: string;
  imgUrl: string;
  aisles: string[];
}