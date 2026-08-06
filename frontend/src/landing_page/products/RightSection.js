import React from 'react';

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageUrl,
}) { 
    return ( 
        <div className="container p-5">
      <div className="row align-items-center gx-5">
        <div className="col-6">
          <h1 className="mb-4">{productName}</h1>

          <p
            className="text-muted mb-4"
            style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
          >
            {productDescription}
          </p>

            <a href={learnMore} className="text-decoration-none fw-semibold">
              Learn More{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          

        <div className="col-6 text-center mb-4 mb-lg-0">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid"
            style={{ width: "85%" }}
          />
        </div>

      </div>
      </div>
     

      
     );
    }

export default  RightSection;