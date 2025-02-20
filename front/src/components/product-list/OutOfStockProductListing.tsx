import { Link } from "react-router-dom";

type PropsType = {
  product: ProductListing;
};

export default function OutOfStockProductListing({ product }: PropsType) {
  const price = product.prices[0];

  return (
    <li className="listing p-4 mx-auto">
      <Link to={`/product/${product.id}`} data-testid={`product-${product.id}`}>
        <div className="w-[354px] h-[330px] relative">
          <img
            src={product.gallery[0]}
            alt={product.name}
            className="w-full h-full object-contain"
          />
          <div className="absolute left-0 top-0 w-full h-full grid place-content-center">
            <div className="bg-[#C4C4C4] opacity-15 w-full h-full absolute top-0 left-0"></div>
            <p className="text-underemphasize text-2xl">OUT OF STOCK</p>
          </div>
        </div>
        <div className="mt-6 text-lg">
          <p className="font-light">{product.name}</p>
          <p className="text-underemphasize">
            <span>{price.currency.symbol}</span>
            {price.amount}
          </p>
        </div>
      </Link>
    </li>
  );
}
