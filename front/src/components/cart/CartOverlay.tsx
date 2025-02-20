type Props = {
  toggleCartState: () => void;
};

export default function CartOverlay({ toggleCartState }: Props) {
  return (
    <div
      onClick={toggleCartState}
      className="absolute top-0 left-0 h-full w-full bg-[#39374838] z-20"
    ></div>
  );
}
