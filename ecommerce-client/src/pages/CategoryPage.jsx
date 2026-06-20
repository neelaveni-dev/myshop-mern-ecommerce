import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const CategoryPage = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const res = await API.get(
        `/products?category=${category}`
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="products-container">

      <h2 className="category-title">
        {category.toUpperCase()}
      </h2>

      {products.map((product) => (
        <div
          key={product._id}
          className="product-card"
        >
          <img
            src={product.image}
            alt={product.name}
          />

          <h3>{product.name}</h3>

          <h4>₹ {product.price}</h4>

          <p>{product.description}</p>

          <Link
            to={`/product/${product._id}`}
          >
            <button>
              View Details
            </button>
          </Link>
        </div>
      ))}

    </div>
  );
};

export default CategoryPage;