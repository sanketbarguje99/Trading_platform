import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

    window.location.href =
  "https://trading-platform-3-5sda.onrender.com";
    } catch (err) {

      alert(
        err.response?.data?.message || "Login Failed"
      );

    }
  };

  return (
    <div className="container mt-5">

      <div
        className="card p-4 shadow mx-auto"
        style={{ maxWidth: "400px" }}
      >

        <h2 className="text-center mb-4">
          Login
        </h2>

        <form onSubmit={handleSubmit}>

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

          <button
            className="btn btn-primary w-100"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;