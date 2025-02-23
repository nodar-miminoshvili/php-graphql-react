import { toKebabCase } from "../../utils/helperFunctions";

type Props = {
  attributeSet: AttributeSet;
  selectedAttribute: string | null;
  selectAttribute: (setId: number, attributeId: string) => void;
};

export default function ProductPageSwatchAttributeSet({
  attributeSet,
  selectedAttribute,
  selectAttribute,
}: Props) {
  return (
    <div>
      <p className="text-xl font-bold">{attributeSet.name.toUpperCase()}:</p>
      <ul
        data-testid={`product-attribute-${toKebabCase(attributeSet.name)}`}
        className="flex gap-2 py-2"
      >
        {attributeSet.attributes.map((attr) => {
          return (
            <li key={attr.id}>
              <button
                data-testid={`product-attribute-${toKebabCase(
                  attributeSet.name
                )}-${attr.displayValue}`}
                onClick={() => {
                  selectAttribute(attributeSet.id, attr.id);
                }}
                style={{ backgroundColor: attr.value }}
                className={`w-8 h-8 ${
                  selectedAttribute === attr.id
                    ? "outline-2 outline-offset-2 outline-accent border-1"
                    : "border-1"
                }`}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
