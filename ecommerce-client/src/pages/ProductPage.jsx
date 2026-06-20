import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  
    <>
    <h2 className="page-title">Our Products</h2>
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-box"
      />

      <div className="products-container">
        {products
          .filter((product) =>
            product.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((product) => (
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

              <p className="product-rating">
                ⭐ {product.rating || 4.5}
              </p>

              <p className="product-category">
                {product.category}
              </p>

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
    </>
  );
};

export default ProductPage;