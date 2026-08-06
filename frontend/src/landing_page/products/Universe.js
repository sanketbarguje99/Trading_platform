import React from "react";

function Universe() {
  const logoStyle = {
    width: "150px",
    height: "50px",
    objectFit: "contain",
  };

  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Thematic investment platform</p>
        </div>

        <div className="col-4 mt-3">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Algo & strategy platform</p>
        </div>

        <div className="col-4 mt-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Options trading platform</p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Asset management</p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Bonds trading platform</p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={logoStyle}
          />
          <p className="text-muted mt-3">Insurance</p>
        </div>
        
         <div className="text-center mt-4">
  <button
    className="btn btn-primary btn-lg px-5"
    style={{ width: "25%" }}
  >
    Signup Now
  </button>
</div>
      </div>
      
    </div>
  );
}

export default Universe;