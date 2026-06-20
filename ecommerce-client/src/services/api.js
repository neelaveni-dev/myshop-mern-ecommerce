import axios from "axios";

const API = axios.create({
  baseURL: "https://myshop-mern-ecommerce.onrender.com/api",
});

export default API;