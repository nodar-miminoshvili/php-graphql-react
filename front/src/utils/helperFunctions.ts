export function capitalizeWord(word: string | undefined): string | null {
  if (typeof word !== "string") return null;

  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalizedWord;
}

export function generateCartItemId(
  item: ProductListing | ProductFullDetails,
  selectedAttributes?: SelectedAttributes
) {
  let generatedId = item.id;

  if (!selectedAttributes) {
    let attributeSets = item.attributeSets;

    if (attributeSets.length === 0) return generatedId;
    attributeSets.forEach((set) => {
      generatedId = generatedId.concat("|").concat(set.attributes[0].id);
    });
  } else {
    let attributes = Object.values(selectedAttributes);
    attributes.forEach((attr) => {
      generatedId = generatedId.concat("|").concat(attr);
    });
  }

  return generatedId;
}

export function countCartItems(cart: Cart) {
  const count = cart.reduce((prev, cur) => {
    return prev + cur.count;
  }, 0);

  return count;
}

export function sumUpCartItemPrices(cart: Cart) {
  const sum = cart.reduce((prev, cur) => {
    return prev + cur.defaultProperties.prices[0].amount * cur.count;
  }, 0);

  return sum.toFixed(2);
}

function decodeSelectedAttributesFromCartItemGeneratedId(id: string): string[] {
  return id.split("|").slice(1);
}

export function matchSelectedAttribute(
  itemGeneratedId: string,
  attributeSet: AttributeSet
): string {
  const decodedAttributeArray =
    decodeSelectedAttributesFromCartItemGeneratedId(itemGeneratedId);
  let selectedAttributeId = "";

  decodedAttributeArray.forEach((attrId) => {
    const attribute = attributeSet.attributes.find((attr) => {
      return attr.id === attrId;
    });
    if (attribute) {
      selectedAttributeId = attribute.id;
    }
  });

  return selectedAttributeId;
}

export function toKebabCase(str: string) {
  return str.split(" ").join("-").toLocaleLowerCase();
}
