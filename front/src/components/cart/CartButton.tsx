import CartIcon from "../../assets/cartIcon.png";
import { useCart } from "../../hooks/useCart";
import { countCartItems } from "../../utils/helperFunctions";

type Props = {
  toggleCartState: () => void;
};

export default function CartButton({ toggleCartState }: Props) {
  const cart = useCart();

  return (
    <button
      data-testid="cart-btn"
      onClick={(e) => {
        e.stopPropagation();
        toggleCartState();
      }}
      className="self-center relative cursor-pointer"
    >
      <img src={CartIcon} alt="cart" />
      {cart.length > 0 && (
        <div
          className="absolute -top-2 left-3 w-5 h-5 rounded-full text-sm bg-black font-semibold
          text-white font-sans grid place-content-center"
        >
          {countCartItems(cart)}
        </div>
      )}
    </button>
  );
}
