import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import ProductListing from "./ProductListing";
import OutOfStockProductListing from "./OutOfStockProductListing";
import { capitalizeWord } from "../../utils/helperFunctions";

const GET_PRODUCTS = gql`
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

export default function ProductList() {
  const { category } = useParams();
  const { data, loading, error } = useQuery<ProductListProducts>(GET_PRODUCTS, {
    variables: { category: category || "" },
  });

  if (loading) return <p>Loading</p>;

  if (error) return <p>{error.message}</p>;

  if (typeof data?.products === "undefined")
    throw new Error("Category is Empty :(");

  console.log(data);

  return (
    <>
      <h1 className="mt-20 mb-26.5 text-[42px] px-5">
        {capitalizeWord(category) || "All Products"}
      </h1>

      <ul className="grid gap-y-23 grid-cols-3">
        {data.products.map((product) => {
          return product.inStock ? (
            <ProductListing key={product.id} product={product} />
          ) : (
            <OutOfStockProductListing key={product.id} product={product} />
          );
        })}
      </ul>
    </>
  );
}
