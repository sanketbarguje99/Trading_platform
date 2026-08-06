import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-5"
          />

          <h1 className="mt-5">
            Invest in Everything
          </h1>

          <p className="fs-5 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>

          <button
            className="btn btn-primary btn-lg mt-3 px-5"
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;