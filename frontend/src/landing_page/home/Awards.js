import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">

        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6 col-md-6 col-12 p-4 mt-3">
          <h1>Largest stock broker in India</h1>

          <p className="mb-3 mt-3">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-3"
            style={{ width: "90%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;