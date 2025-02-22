import { gql, useMutation } from "@apollo/client";
import { useCartDispatch } from "../../hooks/useCartDispatch";
import { useEffect } from "react";

type Props = {
  isDisabled: boolean;
  cart: Cart;
};

export const CREATE_ORDER = gql`
  mutation CreateOrder($items: [String!]!) {
    createOrder(items: $items)
  }
`;
export default function OrderButton({ isDisabled, cart }: Props) {
  const [createOrder, { data, error }] = useMutation(CREATE_ORDER);
  const cartDispatch = useCartDispatch();

  useEffect(() => {
    if (data && data.createOrder) cartDispatch({ type: "CLEAR_ALL" });
  }, [data]);

  if (error) throw new Error("Error While Processing Order :(");

  function handleSubmit() {
    const items = cart.map((item) =>
      item.id.concat("|count:").concat(String(item.count))
    );
    createOrder({
      variables: {
        items,
      },
    });
  }

  return (
    <button
      onClick={handleSubmit}
      disabled={isDisabled}
      className="w-full bg-accent py-3 text-sm font-semibold text-white 
      cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400/30"
    >
      PLACE ORDER
    </button>
  );
}
