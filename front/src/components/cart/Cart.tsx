import { useCart } from "../../hooks/useCart";
import {
  countCartItems,
  sumUpCartItemPrices,
} from "../../utils/helperFunctions";
import CartItem from "./CartItem";
import OrderButton from "./OrderButton";

export default function Cart() {
  const cart = useCart();
  const itemCount = countCartItems(cart);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-full right-0 min-w-81 bg-white px-4 py-7 z-10"
    >
      <p className="font-medium">
        <span className="font-bold">My Bag, </span>
        {itemCount === 1 ? "1 item" : `${itemCount} items`}
      </p>
      <ul className="flex flex-col gap-9 py-10 overflow-y-auto max-h-[calc(100svh-250px)]">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="flex justify-between pb-7">
        <span className="font-sans font-medium">Total</span>
        <span className="font-bold">${sumUpCartItemPrices(cart)}</span>
      </div>
      <OrderButton isDisabled={itemCount === 0} cart={cart} />
    </div>
  );
}
