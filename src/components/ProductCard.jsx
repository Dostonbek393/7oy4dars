import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const r = Math.round(product.rating.rate);
  return (
    <Link
      to={`/product/${product.id}`}
      className="rounded shadow relative border border-black/20 transition-all group/card"
    >
      <div className="aspect-[4/3] w-full py-3 overflow-hidden">
        <img
          className="w-full group-hover/card:scale-[1.15] transition-all duration-300 h-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="p-3 pb-14">
        <span className="text-sm text-black/40">{product.category}</span>
        <h3 className="font-[600] line-clamp-2">{product.title}</h3>
        <p className="text-black/30 line-clamp-2 mb-2">{product.description}</p>
        <div className="absolute p-3 bottom-0 end-0 flex justify-between items-center w-full">
          <div className="flex gap-2 items-center py-2">
            {new Array(5).fill().map((s, i) => (
              <i
                className={`fa fa-star ${
                  i + 1 <= r ? "text-yellow-400" : "text-black/20"
                }`}
              ></i>
            ))}
          </div>
          <p className="text-black/40">
            <i className="fa fa-eye me-1"></i>
            {product.rating.count}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
