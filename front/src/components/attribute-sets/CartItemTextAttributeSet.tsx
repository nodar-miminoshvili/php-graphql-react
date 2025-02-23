import {
  matchSelectedAttribute,
  toKebabCase,
} from "../../utils/helperFunctions";

type Props = {
  attributeSet: AttributeSet;
  itemUniqueId: string;
};

export default function CartItemTextAttributeSet({
  attributeSet,
  itemUniqueId,
}: Props) {
  const selectedAttributeId = matchSelectedAttribute(
    itemUniqueId,
    attributeSet
  );

  return (
    <div className="mt-3">
      <p className="text-sm">{attributeSet.name}:</p>
      <ul
        data-testid={`cart-item-attribute-${toKebabCase(attributeSet.name)}`}
        className="flex items-center gap-1.5 text-sm font-sans py-1"
      >
        {attributeSet.attributes.map((attr) => {
          return (
            <li
              data-testid={
                attr.id === selectedAttributeId
                  ? `cart-item-attribute-${toKebabCase(
                      attributeSet.name
                    )}-${toKebabCase(attr.value)}-selected`
                  : `cart-item-attribute-${toKebabCase(
                      attributeSet.name
                    )}-${toKebabCase(attr.value)}`
              }
              key={attr.id}
              className={`min-w-6 min-h-6 px-1 border-1 border-primary grid place-content-center ${
                attr.id === selectedAttributeId ? "bg-primary text-white" : ""
              }`}
            >
              {attr.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
