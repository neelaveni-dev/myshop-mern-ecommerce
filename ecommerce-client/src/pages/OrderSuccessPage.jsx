import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccessPage.css";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-box">
        <h1>🎉 Order Placed Successfully</h1>

        <p>
          Thank you for shopping with MyShop.
          Your order has been placed successfully.
        </p>

        <button onClick={() => navigate("/products")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;