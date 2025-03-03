import { Link } from "react-router-dom";
import QuickShopButton from "./QuickShopButton";
import { toKebabCase } from "../../utils/helperFunctions";

type PropsType = {
  product: ProductListing;
};

export default function ProductListing({ product }: PropsType) {
  const price = product.prices[0];

  return (
    <li className="listing p-4 mx-auto group">
      <Link
        to={`/product/${product.id}`}
        data-testid={`product-${toKebabCase(product.name)}`}
      >
        <div className="relative vava">
          <img
            src={product.gallery[0]}
            alt={product.name}
            className="w-[354px] h-[330px] object-contain"
          />
          <QuickShopButton product={product} />
        </div>
        <div className="mt-6 text-lg">
          <p className="font-light">{product.name}</p>
          <p>
            <span>{price.currency.symbol}</span>
            {price.amount}
          </p>
        </div>
      </Link>
    </li>
  );
}
