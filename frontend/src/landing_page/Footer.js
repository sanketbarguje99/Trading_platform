import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(240,240,240)" }}>
    <div className="container border-top mt-5" >
      <div className="row mt-5">

        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "50%" }}
          />
          <p>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
        </div>

        <div className="col mt-2 text-muted" style={{textDecoration:"none"}}>
          <h3>Company</h3>
          <a href="#!">About</a> <br />
          <a href="#!">Philosophy</a> <br />
          <a href="#!">Zerodha Cares (CSR)</a> <br />
          <a href="#!">Zerodha.tech</a> <br />
          <a href="#!">Open source</a> <br />
          <a href="#!">Referral program</a>
        </div>

        <div className="col mt-2 text-muted" style={{textDecoration:"none"}} >
          <h3>Support</h3>
          <a href="#!">Contact us</a> <br />
          <a href="#!">How to file a complaint?</a> <br />
          <a href="#!">Status of your complaints</a> <br />
          <a href="#!">Bulletin</a> <br />
          <a href="#!">Circular</a> <br />
          <a href="#!">Z-Connect blog</a> <br />
          <a href="#!">Downloads</a> <br />
          <a href="#!">Support portal</a>
        </div>

        <div className="col mt-2 " style={{textDecoration:"none"}}>
          <h3>Account</h3>
          <a href="#!">Open demat account</a> <br />
          <a href="#!">Minor demat account</a> <br />
          <a href="#!">NRI demat account</a> <br />
          <a href="#!">HUF demat account</a> <br />
          <a href="#!">Commodity</a> <br />
          <a href="#!">Dematerialisation</a> <br />
          <a href="#!">Fund transfer</a> <br />
          <a href="#!">MTF</a>
        </div>

      </div>

    <div className="mt-5 text-small text-muted" style={{fontSize:"14px"}}>
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration
        No.: INZ000031633. CDSL/NSDL: Depository services through Zerodha
        Broking Ltd. – SEBI Registration No.: IN-DP-431-2019. Registered
        Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
        School, J.P. Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
      </p>

      <p>
        For complaints related to securities broking, write to
        complaints@zerodha.com. For DP-related complaints, write to
        dp@zerodha.com. Please read the Risk Disclosure Document prescribed by
        SEBI.
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on the SCORES
        portal. Mandatory details include Name, PAN, Address, Mobile Number,
        and Email ID.
      </p>

      <p>
        Benefits of SCORES: Effective communication and speedy grievance
        redressal.
      </p>

      <p>
        Smart Online Dispute Resolution | Grievances Redressal Mechanism.
      </p>

      <p>
        Investments in the securities market are subject to market risks.
        Please read all related documents carefully before investing.
      </p>

      <p>
        Attention Investors:
      </p>

      <p>
        1. Stock brokers can accept securities as margins only through the
        depository pledge system from September 01, 2020.
      </p>

      <p>
        2. Update your email and phone number with your stock broker and
        depository participant to receive OTPs directly.
      </p>

      <p>
        3. Check your securities, mutual funds, and bonds in the consolidated
        account statement issued every month by NSDL/CDSL.
      </p>

      <p>
        India's largest broker based on net worth as per the NSE broker
        factsheet.
      </p>

      <p>
        Prevent unauthorized transactions in your account. Update your mobile
        number and email ID with your stock broker or depository participant.
        Receive transaction alerts directly from Exchanges and Depositories.
      </p>

      <p>
        KYC is a one-time process while dealing in securities markets. Once
        completed through a SEBI-registered intermediary, it need not be done
        again.
      </p>

      <p>
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Authorize your bank to make payment by providing your
        bank account details in the IPO application.
      </p>

      <p>
        Zerodha does not provide stock tips and has not authorized anyone to
        trade on behalf of clients. If someone claims otherwise, please report
        it immediately.
      </p>

      <p>
        Customers availing insurance advisory services offered by Ditto
        (Tactical Consulting Private Limited) will not have access to the
        Exchange Investor Grievance Redressal Forum, SEBI SCORES/ODR, or
        arbitration mechanism for those products.
      </p>

      <p>
        Fixed Deposit products available on this platform are third-party
        products offered through Blostem Fintech Private Limited. Zerodha
        Broking Limited acts only as a distributor. These products are
        regulated by the Reserve Bank of India (RBI).
      </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;