import React, { useState } from "react";
import API from "../services/api";
import "./RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {

const navigate = useNavigate();

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
});
const [showPassword, setShowPassword] = useState(false);
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
    "/auth/register",
    formData
  );

  alert("Register Success");

  setFormData({
    name: "",
    email: "",
    password: "",
  });

  navigate("/login");

} catch (error) {
  alert(
    error.response?.data?.message ||
    "Registration Failed"
  );
}

};

return (
<div className="register-container">
<h2>🔐 Create Account</h2>
<p>Join Myshop today</p>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
    />

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

    <p className="auth-link">
      Already have an account?
      <Link to="/login"> Login</Link>
    </p>

    <button type="submit">
      Register
    </button>
  </form>
</div>

);
};

export default RegisterPage;