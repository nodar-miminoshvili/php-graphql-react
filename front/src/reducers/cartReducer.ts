import { generateCartItemId } from "../utils/helperFunctions";

export default function cartReducer(cart: Cart, action: CartAction): Cart {
  switch (action.type) {
    case "ADD_TO_CART": {
      let cartCopy = [...cart];
      const product = action.payload.product;
      const attributes = action.payload.selectedAttributes
      let generatedId = generateCartItemId(product,attributes);
      let count = 1;

      const existingItem = cartCopy.find((item) => {
        return item.id === generatedId;
      });

      if (existingItem) {
        return cartCopy.map((item) => {
          if (item.id === generatedId) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      }

      return [
        ...cartCopy,
        { defaultProperties: product, id: generatedId, count },
      ];
    }

    case "INCREMENT": {
      const updatedCart = cart.map((item) => {
        if (item.id !== action.payload) return item;

        return { ...item, count: item.count + 1 };
      });

      return updatedCart;
    }

    case "DECREMENT": {
      const selectedItem = cart.find((item) => item.id === action.payload);

      if (selectedItem?.count === 1) {
        return cart.filter((item) => item.id !== action.payload);
      }

      const updatedCart = cart.map((item) => {
        if (item.id !== action.payload) return item;
        return { ...item, count: item.count - 1 };
      });

      return updatedCart;
    }

    case "CLEAR_ALL": {
      return [];
    }

    default:
      throw new Error("Invalid useReducer action!");
  }
}
