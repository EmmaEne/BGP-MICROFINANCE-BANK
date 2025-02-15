import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import loanImage1 from "/images/damn.jpg";
import loanImage2 from "/images/damn2.jpg";
import loanImage3 from "/images/damn3.jpg";
import Header from "../component/Header";

function LoanApplication() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-2 p-5 pt-5 d-flex align-content-center" style={{background: "#7386b0"}}>
        <h2 className="pt-5 ps-2 text-white fw-bold">Loan Request</h2>
      </div>
      <div className="container-fluid min-vh-100 d-flex align-items-center bg-light-blue-50">
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center">
            {/* Form Section */}
            <div className="col-md-6 p-4 pt-5 apply">
              <form className="pt-5">
                <div className="mb-3">
                  <label className="form-label fw-bold">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your full name" required style={{ height: "50px" }} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required style={{ height: "50px" }} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Enter your phone number" required style={{ height: "50px" }} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Loan Amount</label>
                  <input type="number" className="form-control" placeholder="Enter loan amount" required style={{ height: "50px" }} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Purpose of Loan</label>
                  <textarea className="form-control" rows="3" placeholder="State the purpose of the loan" required></textarea>
                </div>
                <button type="submit" className="btn w-100" style={{ backgroundColor: "#0357ee", color: "#fff" }}>
                  Submit Application
                </button>
              </form>
            </div>

            {/* Carousel Section */}
            <div className="col-md-6 d-none d-md-block text-center border-primary apply p-0">
              <div id="loanCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={loanImage1} alt="Loan Application" className="img-fluid" />
                  </div>
                  <div className="carousel-item">
                    <img src={loanImage2} alt="Loan Application" className="img-fluid" />
                  </div>
                  <div className="carousel-item">
                    <img src={loanImage3} alt="Loan Application" className="img-fluid" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoanApplication;
