import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
 const navigate = useNavigate();
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
const addToCart = () => {
  const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  const exist = cartItems.find(
    (item) => item._id === product._id
  );

  if (exist) {
    exist.qty += 1;
  } else {
    cartItems.push({
      ...product,
      qty: 1,
    });
  }

  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );

  alert("Added To Cart");

  navigate("/cart");
};
  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-details">
  <div className="product-box">

    <img src={product.image} alt={product.name} />

    <h1>{product.name}</h1>

    <h3>₹ {product.price}</h3>

    <p>Stock: {product.countInStock}</p>
    <p>
⭐ {product.rating}
</p>

<p>
Category: {product.category}
</p>
    <button onClick={addToCart}>
      Add To Cart
    </button>

  </div>
</div>

  );
};

export default ProductDetailsPage;