import ProductPageSwatchAttributeSet from "./ProductPageSwatchAttributeSet";
import ProductPageTextAttributeSet from "./ProductPageTextAttributeSet";

type Props = {
  attributeSet: AttributeSet;
  selectedAttribute: string | null;
  selectAttribute: (setId: number, attributeId: string) => void;
};

export default function ProductPageAttributeSet({
  attributeSet,
  selectedAttribute,
  selectAttribute,
}: Props) {
  switch (attributeSet.type) {
    case "text":
      return (
        <ProductPageTextAttributeSet
          attributeSet={attributeSet}
          selectedAttribute={selectedAttribute}
          selectAttribute={selectAttribute}
        />
      );

    case "swatch":
      return (
        <ProductPageSwatchAttributeSet
          attributeSet={attributeSet}
          selectedAttribute={selectedAttribute}
          selectAttribute={selectAttribute}
        />
      );

    default:
      console.error("Invalid Attribute Set Type!");
      return null;
  }
}
