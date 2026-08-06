import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center gx-5">

        {/* Left Side Image */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
            style={{ width: "85%" }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-lg-6 ps-lg-5">
          <h1 className="mb-4">{productName}</h1>

          <p
            className="text-muted mb-4"
            style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
          >
            {productDescription}
          </p>

          <div className="mb-4">
            <a href={tryDemo} className="me-4 text-decoration-none fw-semibold">
              Try Demo{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href={learnMore} className="text-decoration-none fw-semibold">
              Learn More{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          <div className="d-flex align-items-center gap-3">
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
              />
            </a>

            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;