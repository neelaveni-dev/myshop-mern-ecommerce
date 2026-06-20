import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#222",
        color: "white",
      }}
    >
      <h2
style={{
  color:"#ffffff",
  fontSize:"36px",
  fontWeight:"900",
  letterSpacing:"1px"
}}
>
🛒 MyShop
</h2>
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Cart 
          <span className="cart-badge">
          ({cartItems.length})
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;