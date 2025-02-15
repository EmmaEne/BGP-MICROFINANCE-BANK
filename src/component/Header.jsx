import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current page is the Loan page
  const isLoanPage = location.pathname === "/loan";

  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <div className="container-fluid mycontainer">
        <a href="#" onClick={() => navigate("/")} className="navbar-brand">
          BGP Micro-finance
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav desktop">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Solution
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Digital Banking</a></li>
              <li><a className="dropdown-item" href="#">Payment Gateway</a></li>
              <li><a className="dropdown-item" href="#">Agency Banking Network</a></li>
              <li><a className="dropdown-item" href="#">Framed Corporate Banking</a></li>
              <li><a className="dropdown-item" href="#">Sales and Leasing of POS Terminals</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => navigate("/about")} role="button">
              Inside BGP Micro-finance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => navigate("/contact")}>
              Contact
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Banking
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Current Account</a></li>
              <li><a className="dropdown-item" href="#">Savings Account</a></li>
              <li><a className="dropdown-item" href="#">Loans</a></li>
              <li><a className="dropdown-item" href="#">Investments</a></li>
              <li><a className="dropdown-item" href="#">Easy Payment Solutions</a></li>
            </ul>
          </li>
        </ul>

        {/* Signup / Loan Apply Button */}
        <div className="d-none d-sm-block">
          <button
            className="btn sign"
            onClick={() => navigate(isLoanPage ? "/apply" : "/signup")}
          >
            {isLoanPage ? "Apply for Loan" : "Sign up"}
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >X</button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mobile">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Solution
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Digital Banking</a></li>
                  <li><a className="dropdown-item" href="#">Payment Gateway</a></li>
                  <li><a className="dropdown-item" href="#">Agency Banking Network</a></li>
                  <li><a className="dropdown-item" href="#">Framed Corporate Banking</a></li>
                  <li><a className="dropdown-item" href="#">Sales and Leasing of POS Terminals</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/about")} role="button">
                  Inside BGP Micro-finance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/contact")}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/banking")}>
                  Loan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/BusinessManagement")}>
                  Business Management
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link signin"
                  onClick={() => navigate(isLoanPage ? "/apply-loan" : "/signup")}
                >
                  {isLoanPage ? "Apply for Loan" : "Sign up"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
