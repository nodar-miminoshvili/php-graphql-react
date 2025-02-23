type Props = {
  toggleCartState: () => void;
};

export default function CartOverlay({ toggleCartState }: Props) {
  return (
    <div
      data-testid="cart-overlay"
      onClick={toggleCartState}
      className="absolute top-0 left-0 h-full w-full bg-[#39374838] z-20"
    ></div>
  );
}
