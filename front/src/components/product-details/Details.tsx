import { useState } from "react";
import ProductPageAttributeSet from "../attribute-sets/ProductPageAttributeSet";
import { useCartDispatch } from "../../hooks/useCartDispatch";
import { useCartIsOpenDispatch } from "../../hooks/useCartIsOpenDispatch";
import Description from "./Description";

type Props = {
  product: ProductFullDetails;
};
export default function Details({ product }: Props) {
  const [selectedAttributes, setSelectedAttributes] =
    useState<SelectedAttributes>({});

  const cartDispatch = useCartDispatch();
  const cartIsOpenDispatch = useCartIsOpenDispatch();

  function selectAttribute(setId: number, attributeId: string) {
    if (!product.inStock) return;
    setSelectedAttributes((p) => {
      return { ...p, [setId]: attributeId };
    });
  }

  return (
    <section className="min-w-68 max-w-84 px-4 flex flex-col justify-center">
      <p className="text-3xl font-semibold pb-10">{product.name}</p>
      <div className="flex flex-col gap-6 pb-9">
        {product.attributeSets.map((set) => {
          return (
            <ProductPageAttributeSet
              attributeSet={set}
              selectedAttribute={selectedAttributes[set.id]}
              selectAttribute={selectAttribute}
              key={set.id}
            />
          );
        })}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold">PRICE:</p>
          <p className="text-2xl font-bold">
            {product.prices[0].currency.symbol}
            {product.prices[0].amount}
          </p>
        </div>
      </div>
      <button
        disabled={
          !product.inStock ||
          Object.keys(selectedAttributes).length !==
            product.attributeSets.length
        }
        className="bg-accent text-white font-semibold py-3.5 w-full disabled:bg-gray-300/30"
        onClick={() => {
          cartDispatch({
            type: "ADD_TO_CART",
            payload: { product, selectedAttributes },
          });
          cartIsOpenDispatch(true);
        }}
      >
        {product.inStock ? "ADD TO CART" : "OUT OF STOCK"}
      </button>

      <Description description={product.description} />
    </section>
  );
}
