import React, { useState } from "react";
import API from "../services/api";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
const [showPassword,setShowPassword] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );
      localStorage.setItem("user",JSON.stringify(res.data.user));

      alert("Login Success");

      navigate("/");
      
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Welcome Back</h2>
      <p>Login to continue shopping</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
  type={showPassword ? "text" : "password"}
  name="password"
  placeholder="Password"
  value={formData.password}
  onChange={handleChange}
/>
<label
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    margin: "10px 0",
    cursor: "pointer",
  }}
>
  <input
    type="checkbox"
    checked={showPassword}
    onChange={() => setShowPassword(!showPassword)}
  />
  Show Password
</label>
        <button type="submit">
          Login
        </button>
      </form>
      <p style={{ marginTop: "15px" }}>
  Don't have an account?{" "}
  <span
    style={{
      color: "blue",
      cursor: "pointer",
      textDecoration: "underline",
    }}
    onClick={() => navigate("/register")}
  >
    Register
  </span>
</p>
    </div>
  );
};

export default LoginPage;
