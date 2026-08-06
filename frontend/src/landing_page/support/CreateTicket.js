import React from "react";

function CreateTicket() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">
        To create a ticket, select a relevant topic
      </h2>

      <div className="row g-4">
        {/* Account Opening */}
        <div className="col-md-4">
          <h4 className="mb-3">
            <i className="fa-solid fa-circle-plus text-primary me-2"></i>
            Account Opening
          </h4>

          <ul className="ps-3">
            <li><a href="#" className="text-decoration-none">Resident Individual</a></li>
            <li><a href="#" className="text-decoration-none">Minor</a></li>
            <li><a href="#" className="text-decoration-none">Non Resident Indian (NRI)</a></li>
            <li><a href="#" className="text-decoration-none">Company, Partnership, HUF and LLP</a></li>
            <li><a href="#" className="text-decoration-none">Glossary</a></li>
          </ul>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-md-4">
          <h4 className="mb-3">
            <i className="fa-regular fa-circle-user text-primary me-2"></i>
            Your Zerodha Account
          </h4>

          <ul className="ps-3">
            <li><a href="#" className="text-decoration-none">Your Profile</a></li>
            <li><a href="#" className="text-decoration-none">Account Modification</a></li>
            <li><a href="#" className="text-decoration-none">Client Master Report (CMR)</a></li>
            <li><a href="#" className="text-decoration-none">Nomination</a></li>
            <li><a href="#" className="text-decoration-none">Transfer & Conversion of Securities</a></li>
          </ul>
        </div>

        {/* Kite */}
        <div className="col-md-4">
          <h4 className="mb-3">
            <i className="fa-solid fa-chart-column text-primary me-2"></i>
            Kite
          </h4>

          <ul className="ps-3">
            <li><a href="#" className="text-decoration-none">IPO</a></li>
            <li><a href="#" className="text-decoration-none">Trading FAQs</a></li>
            <li><a href="#" className="text-decoration-none">Margin Trading Facility (MTF)</a></li>
            <li><a href="#" className="text-decoration-none">Charts and Orders</a></li>
            <li><a href="#" className="text-decoration-none">Alerts and Nudges</a></li>
          </ul>
        </div>

        {/* Funds */}
        <div className="col-md-4">
          <h4 className="mb-3">
            <i className="fa-solid fa-indian-rupee-sign text-primary me-2"></i>
            Funds
          </h4>

          <ul className="ps-3">
            <li><a href="#" className="text-decoration-none">Add Money</a></li>
            <li><a href="#" className="text-decoration-none">Withdraw Money</a></li>
            <li><a href="#" className="text-decoration-none">Add Bank Accounts</a></li>
            <li><a href="#" className="text-decoration-none">eMandates</a></li>
          </ul>
        </div>

        {/* Console */}
        <div className="col-md-4">
          <h4 className="mb-3">
            <i className="fa-regular fa-circle-dot text-primary me-2"></i>
            Console
          </h4>

          <ul className="ps-3">
            <li><a href="#" className="text-decoration-none">Portfolio</a></li>
            <li><a href="#" className="text-decoration-none">Corporate Actions</a></li>
            <li><a href="#" className="text-decoration-none">Funds Statement</a></li>
            <li><a href="#" className="text-decoration-none">Reports</a></li>
            <li><a href="#" className="text-decoration-none">Profile</a></li>
            <li><a href="#" className="text-decoration-none">Segments</a></li>
          </ul>
        </div>

        {/* Coin */}
        <div className="col-md-4">
          <h4 className="mb-3">
            <i className="fa-solid fa-coins text-primary me-2"></i>
            Coin
          </h4>

          <ul className="ps-3">
            <li><a href="#" className="text-decoration-none">Mutual Funds</a></li>
            <li><a href="#" className="text-decoration-none">SIP</a></li>
            <li><a href="#" className="text-decoration-none">Redeem Mutual Funds</a></li>
            <li><a href="#" className="text-decoration-none">Coin App</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;