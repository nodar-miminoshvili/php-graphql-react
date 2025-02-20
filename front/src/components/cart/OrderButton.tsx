type Props = {
  isDisabled: boolean;
};

export default function OrderButton({ isDisabled }: Props) {
  return (
    <button
      disabled={isDisabled}
      className="w-full bg-accent py-3 text-sm font-semibold text-white 
      cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400/30"
    >
      PLACE ORDER
    </button>
  );
}
