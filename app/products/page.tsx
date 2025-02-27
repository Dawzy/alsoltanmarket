import { SearchBar, Filter } from "@/components";
import { Aisles } from "@/constants";

const Products = () => {
  return (
    <div>
      <div className="flex gap-3">
        <SearchBar />
        <Filter items={Aisles} withNoneOption />
      </div>
    </div>
  );
}
export default Products;