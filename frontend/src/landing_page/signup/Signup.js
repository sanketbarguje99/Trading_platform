import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name: user.name,
          email: user.email,
          password: user.password,
        }
      );

      console.log("Signup Success:", response.data);

      localStorage.setItem("token", response.data.token);

      alert("Signup Successful!");

      navigate("/login");
    } catch (error) {
      console.log("Signup Error:", error);

      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        alert("Backend server is not responding.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card shadow p-4 mx-auto"
        style={{ maxWidth: "450px" }}
      >
        <h2 className="text-center mb-4">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;