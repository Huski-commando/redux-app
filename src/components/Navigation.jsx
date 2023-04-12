import { NavLink } from "react-router-dom";

const Navigation = () => {
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
        <span className="cartCount">Cart items: 0</span>
      </div>
    </div>
  );
};

export default Navigation;
