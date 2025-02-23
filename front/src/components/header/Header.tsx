import Navbar from "./Navbar";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import CartOverlay from "../cart/CartOverlay";
import CartButton from "../cart/CartButton";
import Cart from "../cart/Cart";
import { useCartIsOpenDispatch } from "../../hooks/useCartIsOpenDispatch";
import { useCartIsOpen } from "../../hooks/useCartIsOpen";

export default function Header() {
  const cartIsOpen = useCartIsOpen();
  const cartIsOpenDispatch = useCartIsOpenDispatch();

  function toggleCartState() {
    cartIsOpenDispatch((p) => !p);
  }

  return (
    <>
      {cartIsOpen && <CartOverlay toggleCartState={toggleCartState} />}
      <div
        onClick={() => cartIsOpen && toggleCartState()}
        className="bg-white relative z-30"
      >
        <header className="max-w-7xl mx-auto relative flex justify-between px-5">
          <Navbar />
          <div className="self-center absolute w-1/12 left-1/2 -translate-x-1/2">
            <NavLink to="/all" className={"block w-fit mx-auto"}>
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>

          <CartButton toggleCartState={toggleCartState} />
          {cartIsOpen && <Cart />}
        </header>
      </div>
    </>
  );
}
