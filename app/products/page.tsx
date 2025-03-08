import { LimitFilter, ProductSearchBar, ProductCard } from "@/components";
import { ProductPageProps } from "@/types";
import { getProducts } from "@/utils";

const Products = async ({ searchParams }: ProductPageProps) => {

  const products = await getProducts({
    term: searchParams.term || "",
    limit: searchParams.limit || 10
  }); 

  return (
    <div className="flex flex-col items-center">
      {/* Input Group */}
      <div className="flex w-full gap-3 items-center">
        <ProductSearchBar />
        <LimitFilter />
        <p className="text-center font-bold text-lg">
          *Not all products are listed, for inquiries on prices or availability, call during open hours.
        </p>
      </div>

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