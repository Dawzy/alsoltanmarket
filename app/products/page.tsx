import { SearchBar } from "@/components";

const Products = () => {
  return (
    <div className="flex gap-3 items-center">
      <SearchBar />
      <p className="text-center font-bold text-lg">*Not all products are listed, for inquiries on prices or availability, call during open hours.</p>
    </div>
  );
}
export default Products;