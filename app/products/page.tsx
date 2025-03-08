import { LimitFilter, ProductSearchBar } from "@/components";
import { ProductPageProps } from "@/types";
import { getProducts } from "@/utils";

const Products = async ({ searchParams }: ProductPageProps) => {

  const products = await getProducts({
    term: searchParams.term || "",
    limit: searchParams.limit || 10
  }); 

  return (
    <div className="flex gap-3 items-center">
      <ProductSearchBar />
      <LimitFilter />
      <p className="text-center font-bold text-lg">*Not all products are listed, for inquiries on prices or availability, call during open hours.</p>
    </div>
  );
}
export default Products;