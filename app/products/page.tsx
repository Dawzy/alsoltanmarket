import { SearchGroup, ProductCard } from "@/components";
import { ProductPageProps } from "@/types";
import { getProducts } from "@/utils";
import * as React from "react";

const Products = async ({ searchParams }: ProductPageProps) => {
  const { term, aisle, limit } = await searchParams;

  const products = await getProducts({
    term: term || "",
    aisle: aisle || "",
    limit: limit || 10
  }); 

  return (
    <div className="flex flex-col items-center">
      {/* Input Group */}
      <SearchGroup />

      {/* Products View */}
      <div className="product-grid w-full h-[75vh] overflow-y-scroll overflow-x-hidden no-scroll">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Products;