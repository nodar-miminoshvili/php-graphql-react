type Props = {
  attributeSet: AttributeSet;
  selectedAttribute: string | null;
  selectAttribute: (setId: number, attributeId: string) => void;
};

export default function ProductPageTextAttributeSet({
  attributeSet,
  selectedAttribute,
  selectAttribute,
}: Props) {
  return (
    <div>
      <p className="text-xl font-bold">{attributeSet.name.toUpperCase()}:</p>
      <ul className="flex gap-2.5 py-2">
        {attributeSet.attributes.map((attr) => {
          return (
            <li key={attr.id}>
              <button
                onClick={() => {
                  selectAttribute(attributeSet.id, attr.id);
                }}
                className={`font-sans min-w-16 min-h-11 border-1 border-primary w-[calc(100%+3px)] ${
                  selectedAttribute === attr.id
                    ? "bg-primary text-white"
                    : "text-primary"
                }`}
              >
                {attr.displayValue}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
