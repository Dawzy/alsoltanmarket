import inventory from "@/constants/inventory.json";
import { FilterProps, Product } from "@/types";

export const aggregateProductNames = () => inventory.map( (product: Product) => product.name);

export const getProducts = async (filters: FilterProps) => {
  const { term, limit } = filters;
  const data: Product[] = inventory.filter(product =>
    product.name.toLowerCase().replace(/\s+/g, "").includes(term.toLowerCase().replace(/\s+/g, "")) ||
    product.aisles.find(
      aisle => aisle.toLowerCase().replace(/\s+/g, "").includes(term.toLowerCase().replace(/\s+/g, ""))
    ));
  
  return (limit >= data.length ? data : data.slice(0, limit));
}