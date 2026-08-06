import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-5 p-3">
      <h1>Zerodha Products</h1>

      <h3 className="text-muted mt-3 fs-4">
        Sleek, modern, and intuitive trading platforms
      </h3>

      <p className="mt-3">
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings
        </a>
        <i className="fa-solid fa-arrow-right-long"></i>
      </p>
    </div>
  );
}

export default Hero;