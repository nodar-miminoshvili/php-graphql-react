import Navbar from "./Navbar";
import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/cartIcon.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative flex justify-between px-5">
      <Navbar />
      <div className="self-center absolute w-1/12 left-1/2 -translate-x-1/2">
        <NavLink to="/" className={"block w-fit mx-auto"}>
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <button className="self-center">
        <img src={CartIcon} alt="cart" />
      </button>
    </header>
  );
}
