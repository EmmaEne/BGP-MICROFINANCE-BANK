import Header from "../component/Header"
import BackToTop from "../component/BackToTop"
import FAQ from "../component/Faq"
import data from "../loanData"

// importing images
import pattern from "/images/freepik__expand__43826-removebg-preview.png"
import posMachine from "/images/pos_machine1-removebg-preview.png"

import "../App.css"
import "../index.css"

// import components
import Footer from "../component/Footer"
import GetStarted from "../component/GetStarted"

import { Link } from "react-router-dom"

const carouselItems = [
  {
    title: "Banking Made Easy for You",
    text: "At BEST, we understand that managing your finances should be simple, secure, and convenient. Whether you need a current account, a savings account, a loan, or an investment opportunity, our Personal Banking services are designed to help you achieve your financial goals effortlessly.",
    image: posMachine,
  }
];

const personalFaqs = [
  {
    question: "How do I open a personal savings account?",
    answer:
      "You can open a savings account online or visit any of our branches with a valid ID and proof of address.",
  },
  {
    question: "What are the interest rates on savings accounts?",
    answer:
      "Our savings accounts offer competitive interest rates that vary based on your account balance.",
  },
  {
    question: "Can I apply for a loan without an existing account?",
    answer:
      "Yes, but having an account with us makes the process faster and easier.",
  },
];




function Loan() {
  return (
    <>
      <Header />
      <section className="hero-section bg-light text-dark">
        <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div class="carousel-indicators">
            {/* <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button> */}
          </div>
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="row align-items-center">
                  <div className="text col-lg-6">
                    <div className="rounded-pill" style={{
                      backgroundColor: " rgba(54, 143, 232, 0.532)"
                    }}></div>
                    <div className="rounded-pill" style={{ width: "40%", backgroundColor: " rgba(54, 143, 232, 0.532)" }}>
                    </div>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                    <button className="btn btn-lg btn-primary rounded-pill" style={{ width: "170px", height: "50px" }}><Link to="/apply" className="link">Request Loan</Link></button>
                  </div>
                  <div className="image col-lg-6">
                    <div className="imagebox">
                      <img src={item.image} className="d-block w-100 h-100" alt="Feature" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offers mt-5">
        <div id="intro">
          <h2>Our Personal Banking Services</h2>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          {data.map((item) => (
            <div key={item.id} className={item.className}>
              <div className="card p-4" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <span>{item.subtext}</span>
                  <ul className="list-unstyled mt-3">
                    {item.description.map((desc, index) => (
                      <li key={index} className="d-flex align-items-left">
                        <i className="fa fa-check text-success me-2"></i> {desc}
                      </li>
                    ))}
                  </ul>
                  {item.link ? <a href="#" className="btn btn-primary">{item.link}</a> : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GetStarted
        heading="Get Your Business Loan Today!"
        description="We offer the best rates and flexible repayment plans to suit your needs. Apply today and get funded fast!"
        buttonText="Apply for Business Loan"
        imgSrc={pattern}
        imgAlt="Business Loan Image"
      />

      <FAQ faqs={personalFaqs} />

      <Footer description="BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. An upgraded liscence to best global payment, head office located at 111 calabar road, calabar south, LGA Cross river state." />
      <BackToTop />
    </>
  )
}

export default Loan