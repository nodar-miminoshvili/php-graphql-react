import { useContext } from "react";
import { CartIsOpenDispatchContext } from "../contexts/CartContext";

export function useCartIsOpenDispatch() {
  const context = useContext(CartIsOpenDispatchContext);
  if (!context) throw new Error("Can't Access cartIsOpen Dispatch Context");
  return context;
}
