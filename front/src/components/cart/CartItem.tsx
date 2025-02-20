import { useCartDispatch } from "../../hooks/useCartDispatch";
import CartItemAttributeSet from "../attribute-sets/CartItemAttributeSet";

type Props = {
  item: CartItem;
};
export default function CartItem({ item }: Props) {
  const cartDispatch = useCartDispatch();

  return (
    <li className="flex gap-3">
      <div className="flex-grow">
        <p className="text-lg font-light">{item.defaultProperties.name}</p>
        <p>
          {item.defaultProperties.prices[0].currency.symbol}
          {item.defaultProperties.prices[0].amount}
        </p>

        {item.defaultProperties.attributeSets.map((set) => (
          <CartItemAttributeSet
            key={set.id}
            attributeSet={set}
            itemUniqueId={item.id}
          />
        ))}
      </div>
      <div className="flex flex-col justify-between items-center">
        <button
          onClick={() => {
            cartDispatch({ type: "INCREMENT", payload: item.id });
          }}
          className="w-6 h-6 border-1 font-mono font-semibold grid place-content-center cursor-pointer hover:bg-accent hover:text-white transition-colors"
        >
          +
        </button>
        <span>{item.count}</span>
        <button
          onClick={() => {
            cartDispatch({ type: "DECREMENT", payload: item.id });
          }}
          className="w-6 h-6 border-1 font-mono font-semibold grid place-content-center cursor-pointer hover:bg-accent hover:text-white transition-colors"
        >
          -
        </button>
      </div>
      <img
        src={item.defaultProperties.gallery[0]}
        alt={item.defaultProperties.name}
        className="w-[121px] h-[167px] object-contain"
      />
    </li>
  );
}
