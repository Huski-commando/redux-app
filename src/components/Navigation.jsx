import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="logo">LOGO STORE</div>

      <div>
        <NavLink to="" className="navLink">
          HOME
        </NavLink>

        <NavLink to="/cart" className="navLink">
          CART
        </NavLink>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navigation;
