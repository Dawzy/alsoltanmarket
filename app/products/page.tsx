import { LimitFilter, ProductCard, SearchBar } from "@/components";
import { AISLES, PRODUCTS } from "@/constants";
import { ProductPageProps } from "@/types";
import { getProducts } from "@/utils";
import Link from "next/link";

const Products = async ({ searchParams }: ProductPageProps) => {

  const products = await getProducts({
    term: searchParams.term || "",
    aisle: searchParams.aisle || "",
    limit: searchParams.limit || 10
  }); 

  return (
    <div className="flex flex-col items-center">
      {/* Input Group */}
      <div className="flex w-full gap-3 items-center">
        <SearchBar list={PRODUCTS} paramName="term" placeholder="search products" />
        <SearchBar list={AISLES} paramName="aisle" placeholder="search aisles"/>
        <LimitFilter />
        <p className="text-center font-bold text-lg">
          *Not all products are listed. For inquiries on prices or availability, call during open hours.
        </p>
      </div>
      <p className="text-2xl w-full font-bold text-center">
        Showing results for "Tea" in Toys. <Link className="underline text-blue-400" href="/products">Clear search</Link>
      </p>

      {/* Products View */}
      <div className="product-grid w-full h-[75vh] overflow-y-scroll overflow-x-hidden no-scroll">
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
export default Products;