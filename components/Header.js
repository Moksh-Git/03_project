import { Link } from "react-router-dom";
import carticon from "../assets/cart-icon.svg";
import { useSelector } from "../react-redux";

export default function Header() {
  const cart = useSelector((state) => {
    return state.cartItem;
  });

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={carticon} alt="cart-icon" />
          <div className="cart-items-count">
            {cart.reduce((accu, curr) => accu + curr.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
