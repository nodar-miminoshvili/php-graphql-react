type Categories = {
    categories: {__typename:string, name:string}[]
}

type Currency = {
    __typename: "Currency",
    label: string,
    symbol: string
}

type Price = {
    __typename: "Price",
    id: number,
    amount: number,
    currency: Currency
}

type Attribute = {
    __typename: "Attribute",
    id: string,
    value: string,
    displayValue: string
}

type AttributeSet = {
    __typename: "AttributeSet",
    id: number,
    name: string,
    type: string,
    attributes: Attribute[]
}

type ProductListing = {
    id: string,
    name: string,
    inStock: boolean,
    gallery: string[],
    prices: Price[],
    attributeSets: AttributeSet[] | []
}

type ProductListProducts = {
    products: ProductListing[]
}

type CartItem = {
    defaultProperties: ProductListing, 
    id: string, 
    count: number
}

type Cart = CartItem[];

type CartAction = 
   | {type: "ADD_TO_CART"; payload: {product:ProductListing | ProductFullDetails,selectedAttributes?: SelectedAttributes}}
   | { type: "INCREMENT"; payload: string }
   | { type: "DECREMENT"; payload: string }
   | { type: "CLEAR_ALL"}


interface ProductFullDetails extends ProductListing {
    brand: string,
    description: string
}

type ProductFullDetailsQuery = {
    product: ProductFullDetails;
}

type SelectedAttributes = { [index: number]: string }

type SelectAttribute = (setId:number, attrId:string)=>void