import inventory from "@/constants/inventory.json";
import { Product } from "@/types";

export const aggregateProductNames = () => inventory.map( (product: Product) => product.name);