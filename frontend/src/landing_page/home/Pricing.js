import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-4 col-md-5 col-12 mb-4">
          <h1 className="fs-2 mb-3">Unbeatable pricing</h1>

          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-decoration-none">
            See pricing{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Spacer */}
        <div className="col-lg-2 d-none d-lg-block"></div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-7 col-12">
          <div className="row text-center">

            <div className="col-6 border p-3">
              <h1>₹0</h1>
              <p className="text-muted mb-0">
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>

            <div className="col-6 border p-3">
              <h1>₹20</h1>
              <p className="text-muted mb-0">
                Intraday and F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;