import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const navigate = useNavigate();

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item._id !== id
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cartItems",
      JSON.stringify(updatedCart)
    );
  };

  const increaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cartItems",
      JSON.stringify(updatedCart)
    );
  };

  const decreaseQty = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item._id === id
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item
      )
      .filter((item) => item.qty > 0);

    setCartItems(updatedCart);

    localStorage.setItem(
      "cartItems",
      JSON.stringify(updatedCart)
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart Is Empty 🛒</h2>

        <p>
          Looks like you haven't added any products yet.
        </p>

        <Link to="/products">
          <button className="shop-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">
        Shopping Cart
      </h2>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="cart-card"
        >
          <img
            className="cart-image"
            src={item.image}
            alt={item.name}
          />

          <div className="cart-info">
            <h3>{item.name}</h3>

            <h4>₹ {item.price}</h4>

            <div className="cart-actions">
              <div className="qty-controls">
                <button
                  onClick={() =>
                    decreaseQty(item._id)
                  }
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() =>
                    increaseQty(item._id)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeItem(item._id)
                }
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="total-box">
        <h2>
          Total : ₹ {totalPrice}
        </h2>

        <button
          className="checkout-btn"
          onClick={() =>
            navigate("/checkout")
          }
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;