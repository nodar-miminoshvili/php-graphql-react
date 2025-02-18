import CartIconWhite from "../../assets/cartIconWhite.png";

export default function QuickShopButton() {
  return (
    <button
      className="w-13 h-13 rounded-full bg-accent place-content-center hidden group-hover:grid 
    absolute bottom-0 translate-y-1/2 right-4 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        console.log("hehehey");
      }}
    >
      <img src={CartIconWhite} />
    </button>
  );
}
