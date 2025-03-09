import inventory from "@/constants/inventory.json";
import { FilterProps, Product } from "@/types";

export const hasSubstring = (str: string, substr: string) => {
  // Removes spaces and converts both arguments to lower case before checking if the substring exists in string
  return (
    str
    .toLowerCase()
    .replace(/\s+/g, "")
    .includes(
      substr
      .toLowerCase()
      .replace(/\s+/g, "")
    )
  )
}

export const aggregateAisleNames = () => {
  const allAisles: string[] = [];
  const exists: { [key: string]:boolean } = {};

  inventory.forEach( (product: Product) => {
    product.aisles.forEach(aisle => {
      if (exists[aisle]) return; // Already exists
      
      // Add aisle name
      exists[aisle] = true;
      allAisles.push(aisle);
    })
  });

  return allAisles;
}

export const getProducts = async (filters: FilterProps) => {
  const { term, aisle, limit } = filters;

  // Get products that match term and aisle
  const data: Product[] = inventory.filter(product =>
    hasSubstring(product.name, term) &&
    (aisle === "" || product.aisles.includes(aisle))
  );
  
  // Limit the number of elements in the array
  return (limit >= data.length ? data : data.slice(0, limit));
}