import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
  const contex = useContext(CartContext);

  if (contex === undefined) {
    throw new Error("No hay contexto de carrito");
  }

  return contex;
};
