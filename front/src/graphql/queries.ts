import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS = gql`
query ($category: String!) {
  products(category: $category) {
    id
    name
    gallery
    inStock
    attributeSets {
      name
      id
      type
      attributes {
        id
        value
        displayValue
      }
    }
    prices {
      amount
      currency {
        label
        symbol
      }
    }
  }
}
`;

export const GET_PRODUCT = gql`
query ($id: String!) {
  product(id: $id) {
    id
    name
    gallery
    inStock
    brand
    description
    attributeSets {
      name
      id
      type
      attributes {
        id
        value
        displayValue
      }
    }
    prices {
      amount
      currency {
        label
        symbol
      }
    }
  }
}
`;
