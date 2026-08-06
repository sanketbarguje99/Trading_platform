import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ width: "70%" }}
          />
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
          <h1 className="fs-2 mb-3">
            Free and open market education
          </h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="text-decoration-none">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="#" className="text-decoration-none">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;