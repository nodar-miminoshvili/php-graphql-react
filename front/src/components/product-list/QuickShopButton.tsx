import CartIconWhite from "../../assets/cartIconWhite.png";
import { useCartDispatch } from "../../hooks/useCartDispatch";

type Props = {
  product: ProductListing;
};

export default function QuickShopButton({ product }: Props) {
  const cartDispatch = useCartDispatch();
  return (
    <button
      className="w-13 h-13 rounded-full bg-accent place-content-center hidden group-hover:grid 
    absolute bottom-0 translate-y-1/2 right-4 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        cartDispatch({ payload: product, type: "ADD_TO_CART" });
      }}
    >
      <img src={CartIconWhite} />
    </button>
  );
}
