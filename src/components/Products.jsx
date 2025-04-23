import { useGetAllProductsQuery } from "../lib/api/productsApi";
import ProductCard from "./productCard";

const Products = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (error) {
    return (
      <div className="w-full py-10 text-center text-3xl font-bold text-red-500 opacity-90">
        <i className="fa fa-bug"></i> Something went wrong, Please try again
        later!
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full py-10 text-center text-3xl font-bold  opacity-90">
        <i className="fa fa-circle-notch fa-spin"></i>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-10 px-10 py-10 container">
      {data && data.map((d) => <ProductCard product={d} key={d.id} />)}
    </div>
  );
};

export default Products;
