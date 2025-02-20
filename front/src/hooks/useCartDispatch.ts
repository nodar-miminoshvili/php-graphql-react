import { useContext } from "react";
import { CartDispatchContext } from "../contexts/CartContext";

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error("Can't Access Cart Dispatch Context");
  return context;
}
