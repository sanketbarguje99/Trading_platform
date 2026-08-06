import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container text-center my-5 py-5">
      <h1 className="mb-3">Open a Zerodha account</h1>

      <p className="text-muted fs-5 mb-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
        F&O trades.
      </p>

      <Link
        to="/signup"
        className="btn btn-primary btn-lg px-5"
      >
        Sign up for free
      </Link>
    </div>
  );
}

export default OpenAccount;