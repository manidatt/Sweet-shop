import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css"; // ✅ make sure to create this file

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const endpoint = isLogin
      ? "http://localhost:8080/api/auth/login"
      : "http://localhost:8080/api/auth/register";

    const response = await axios.post(endpoint, form);

    // Adjusted for backend returning { token, role }
    const token = response.data.token; 
    const role = response.data.role;

    if (!token) throw new Error("No token returned from server");

    // Save to localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    // Redirect based on role
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/user");
    }

  } catch (error) {
    console.error("Auth error:", error);
    alert("Authentication failed. Please try again.");
  }
};


  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
