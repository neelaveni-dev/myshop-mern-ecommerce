import { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { useNavigate } from "react-router-dom";


const CheckoutPage = () => {
const navigate = useNavigate();

useEffect(() => {
  const user = localStorage.getItem("user");

  if (!user) {
    navigate("/login");
  }
}, [navigate]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (
  !formData.name ||
  !formData.address ||
  !formData.city ||
  !formData.pincode ||
  !formData.phone
) {
  alert("Please fill all fields");
  return;
}
    alert("Order Success");
    
    localStorage.removeItem("cartItem");

    navigate("/order-success");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
      <h2>📦 Checkout</h2>
      <p>Enter your delivery details</p>
      <input className="checkout-input"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input className="checkout-input"
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <input className="checkout-input"
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <input className="checkout-input"
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleChange}
     />
      <input className="checkout-input"
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <button className="checkout-btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
</div>

  );
};

export default CheckoutPage;