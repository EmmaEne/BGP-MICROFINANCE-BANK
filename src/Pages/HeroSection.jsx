import Header from "../component/Header"
import BackToTop from "../component/BackToTop"
import data from "../about"

// importing images

import logo1 from "/images/9psb-removebg-preview.png"
import logo2 from "/images/ammfib-removebg-preview.png"
import logo3 from "/images/fcmb-removebg-preview.png"
import logo4 from "/images/vfd_mfi_b-removebg-preview.png"
import logo5 from "/images/wirelesspay-removebg-preview.png"
import logo6 from "/images/errandpay-logos.png"
import pos from "/images/diverse-business-group-working-laptop.jpg"
import dreamMaker from "/images/black-men-cafe-having-business.jpg"
import feat from "/images/model4-removebg-preview.png"
import model2 from "/images/model2-removebg-preview.png"
import festivalModels from "/images/model1-removebg-preview.png"
import posMachine from "/images/pos machine.png"
import model3 from "/images/model3-removebg-preview.png"

// importing fonts
import rightarrow from "/icons/arrow-right.svg"

import "../App.css"

// import components
import Footer from "../component/Footer"

const carouselItems = [
  {
    title: "Stay in control of your money with a BEST account.",
    text: "Creating Financial Impact is our continual focus within the fintech microfinance Institution in Nigeria and across-board.",
    image: feat,
  },
  {
    title: "Bank smarter with Best innovative solutions.",
    text: "Experience seamless transactions and financial growth with our cutting-edge banking technology.",
    image: model2,
  },
  {
    title: "Your future, your finances, our priority.",
    text: "We are committed to providing financial solutions that secure your tomorrow, today.",
    image: festivalModels,
  },
  {
    title: "Loan with easy payment structure",
    text: "We’ve made loans easily accessible to you to help you reach your goals and stay in control. Unlock higher loan amounts by transacting with your account  on Mobile App, USSD, Internet Banking and others of our banking channels.",
    image: model3,
  }
];


const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

function HeroSection() {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          </div>
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="row align-items-center">
                  <div className="text col-lg-6">
                    <div className="rounded-pill"></div>
                    <div className="rounded-pill" style={{ width: "40%" }}>
                    </div>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                    <button className="btn btn-lg btn-primary rounded-pill" style={{ width: "170px", height: "50px" }}>Join us</button>
                  </div>
                  <div className="image col-lg-6">
                    <div className="imagebox">
                      <img src={item.image} className="d-block w-100" alt="Feature" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <h3>About BGP Microfinance Bank</h3>
          <p className="w-50">BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. An upgraded liscence to best global payment, head office located at 111 calabar road, calabar south, LGA Cross river state.</p>
        </div>
        <div className="wave-div"></div>
      </section>

      <section className="offers">
        <div id="intro" className="col-lg-6 mb-5">
          <h2>Here are our best offers.</h2>
        </div>
        <div className="row d-flex justify-content-center">
          {data.map((item) => (
            <div key={item.id} className={item.className}>
              <div className="card p-4" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <ul className="list-unstyled">
                    {item.description.map((desc, index) => (
                      <li key={index} className="d-flex align-items-center">
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

      <section className=""></section>

      <section className="trusted">
        <h1>Trusted by <span>2,000+</span> businesses</h1>
        <div className="parent-cont container">
          <div className="child-cont">
            <div><i className="fa fa-user text-primary" style={{ fontSize: "30px" }}></i></div>
            <div>
              <h4>5,000</h4>
              <p>New Clients Joined us</p>
            </div>
          </div>
          <div className="child-cont">
            <div><i className="fa fa-users text-primary" style={{ fontSize: "30px" }}></i></div>
            <div>
              <h4>15</h4>
              <p>our partners</p>
            </div>
          </div>
          <div className="child-cont">
            <div><i className="fa fa-house text-primary" style={{ fontSize: "30px" }}></i></div>
            <div>
              <h4>3</h4>
              <p>Branches in Cross River State</p>
            </div>
          </div>
        </div>
      </section>

      <section className="investors trusted container">
        <div className="start mb-4">
          <h4>Our Partners</h4>
        </div>

        <div id="logoCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            {logos.map((_, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="d-flex justify-content-center">
                  {[0, 1, 2, 3, 4, 5].map((offset) => {
                    const logoIndex = (index + offset) % logos.length;
                    return (
                      <img key={logoIndex} src={logos[logoIndex]} className="logos mx-2" alt={`Logo ${logoIndex + 1}`} />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blank"></section>

      <section className="join-us container-fluid row">
        <div className="col-lg-5">
          <img src={pos} className="joinImg" />
          <h3>Join as a partner</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn rounded-pill">Join now <img src={rightarrow} /></button>
        </div>
        <div className="col-lg-5">
          <img src={dreamMaker} className="joinImg" />
          <h3>Join the DreamMakers</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn rounded-pill">Join now <img src={rightarrow} /></button>
        </div>
      </section>

      <Footer description="BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. An upgraded liscence to best global payment, head office located at 111 calabar road, calabar south, LGA Cross river state." />
      <BackToTop />
    </>
  )
}

export default HeroSection