import { SearchView, ProductCard } from "@/components";
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
      <div>
        <p className="text-center font-bold text-2xl py-2">
          *Not all products are listed. For inquiries on prices or availability, call during open hours.
        </p>
        <hr className="border-2 rounded-full mb-5" />
      </div>
      {/* Input Group */}
      <SearchView />

      {/* Products View */}
      <div className="product-grid w-full h-full md:h-[75vh] overflow-y-scroll overflow-x-hidden no-scroll">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Products;