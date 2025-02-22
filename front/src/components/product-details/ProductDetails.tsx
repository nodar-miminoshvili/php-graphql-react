import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../../graphql/queries";
import Gallery from "./Gallery";
import Details from "./Details";

export default function ProductDetails() {
  const { productId } = useParams();

  const { data, loading, error } = useQuery<ProductFullDetailsQuery>(
    GET_PRODUCT,
    {
      variables: { id: productId },
    }
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  if (!data) throw new Error("Couldn't Fetch Product Details");

  console.error(error);
  return (
    <section className="max-w-7xl mx-auto px-12 xl:px-0 pt-20">
      <div className="flex gap-20">
        <Gallery
          gallery={data.product.gallery}
          productName={data.product.name}
        />
        <Details product={data.product} />
      </div>
    </section>
  );
}
