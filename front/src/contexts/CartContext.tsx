import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext<Cart | null>(null);

export const CartDispatchContext =
  createContext<React.Dispatch<CartAction> | null>(null);

export const CartIsOpenContext = createContext<Boolean>(false);

export const CartIsOpenDispatchContext = createContext<React.Dispatch<
  React.SetStateAction<boolean>
> | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cart");
    return localData ? JSON.parse(localData) : [];
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext value={dispatch}>
        <CartIsOpenContext value={isOpen}>
          <CartIsOpenDispatchContext value={setIsOpen}>
            {children}
          </CartIsOpenDispatchContext>
        </CartIsOpenContext>
      </CartDispatchContext>
    </CartContext.Provider>
  );
}
