import { matchSelectedAttribute } from "../../utils/helperFunctions";

type Props = {
  attributeSet: AttributeSet;
  itemUniqueId: string;
};

export default function CartItemSwatchAttributeSet({
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
      <ul className="flex items-center gap-1.5 text-sm font-sans py-1 px-1">
        {attributeSet.attributes.map((attr) => {
          return (
            <li
              key={attr.id}
              style={{ backgroundColor: attr.value }}
              className={`w-4 h-4 ${
                attr.id === selectedAttributeId
                  ? "outline-2 outline-green-500"
                  : "border-1"
              }`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
