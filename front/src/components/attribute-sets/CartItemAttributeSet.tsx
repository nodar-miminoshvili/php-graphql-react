import CartItemSwatchAttributeSet from "./CartItemSwatchAttributeSet";
import CartItemTextAttributeSet from "./CartItemTextAttributeSet";

type Props = {
  attributeSet: AttributeSet;
  itemUniqueId: string;
};

export default function CartItemAttributeSet({
  attributeSet,
  itemUniqueId,
}: Props) {
  switch (attributeSet.type) {
    case "text":
      return (
        <CartItemTextAttributeSet
          attributeSet={attributeSet}
          itemUniqueId={itemUniqueId}
        />
      );

    case "swatch":
      return (
        <CartItemSwatchAttributeSet
          attributeSet={attributeSet}
          itemUniqueId={itemUniqueId}
        />
      );

    default:
      console.error("Invalid Attribute Set Type!");
      return null;
  }
}
