import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../lib/api/productsApi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

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
  const r = Math.round(product.rating.rate);
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <div className="flex gap-5">
        <div className="w-[400px] flex-shrink-0 aspect-square">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-[1.15] transition duration-300 cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="mt-2 text-black/40 rounded-full border inline-flex items-center px-2 text-sm">
            {product.category}
          </p>
          <p className="text-lg mt-3 text-black/60">{product.description}</p>
          <div className="py-3 flex justify-between">
            <div className="flex gap-1 items-center">
              {new Array(5).fill().map((_, i) => (
                <i
                  className={`fa fa-star ${
                    i + 1 <= r ? "text-yellow-400" : "text-black/30"
                  }`}
                  key={i}
                ></i>
              ))}
            </div>
            <p className="text-black/40">
              <i className="fa fa-eye me-1"></i>
              {product.rating.count}
            </p>
          </div>
          <p className="text-4xl mt-3 font-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
