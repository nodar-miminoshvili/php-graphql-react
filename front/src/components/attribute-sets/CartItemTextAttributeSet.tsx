import { matchSelectedAttribute } from "../../utils/helperFunctions";

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
      <ul className="flex items-center gap-1.5 text-sm font-sans py-1">
        {attributeSet.attributes.map((attr) => {
          if (attr.id === selectedAttributeId) {
            return (
              <li
                key={attr.id}
                className="min-w-6 min-h-6 px-1 border-1 border-primary grid place-content-center bg-primary text-white"
              >
                {attr.value}
              </li>
            );
          }
          return (
            <li
              key={attr.id}
              className="min-w-6 min-h-6 px-1 border-1 border-primary grid place-content-center"
            >
              {attr.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
