import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("Can't Access Cart Context");
  return context;
}
