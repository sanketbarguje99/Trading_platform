import React from "react";

function Brokerage() {
  return (
     <div className="container p-5 mb-5">
      <div className="row  border-top p-5 mt-5">
          <div className='col-8 p-5'>
          <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3> </a>
          <ul className="text-muted" style={{lineHeight:"1.8"}}>
              <li>0.03% or Rs. 20/executed order whichever is lower</li> 
              <li>0.025% on the sell side</li> 
              <li>NSE: 0.00307% BSE: 0.00375%</li> 
              <li>18% on (brokerage + SEBI charges + transaction charges)</li> 
              <li>	₹10 / crore</li> 
              <li>0.003% or ₹300 / crore on buy side</li> 
         </ul>
          </div>
           <div className='col-4 p-5 text-center'>
            <a href=""style={{textDecoration:"none"}}> <h3 className="fs-5">List of charges</h3></a>
           </div>
            </div>
        </div>
    
  );
}

export default Brokerage;