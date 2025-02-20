import { useContext } from "react";
import { CartIsOpenContext } from "../contexts/CartContext";

export function useCartIsOpen() {
  const context = useContext(CartIsOpenContext);
  if (typeof context === "undefined")
    throw new Error("Can't Access cartIsOpen Context");
  return context;
}
