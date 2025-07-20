import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Card = ({ limit }) => {
  const products = useSelector((state) => state.productReducer.Products);
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <>
      {displayedProducts.length ? (
        displayedProducts.map((p, index) => (
          <Link to={`/details/${p.id}`} key={index}>
            <div className="text-left cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105">
              <div className="relative">
               
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm md:text-[20px] font-bold text-center">
                {p.title}
              </p>
              <p className="text-xs md:text-[20px] font-semibold text-gray-600 text-center">
                {p.price}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p>Products Coming Soon</p>
      )}
    </>
  );
};
