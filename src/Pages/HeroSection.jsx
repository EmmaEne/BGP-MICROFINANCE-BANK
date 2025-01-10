import Header from "../component/Header"
import BackToTop from "../component/BackToTop"
import data from "../about"

// importing images
import heart from "/icons/heart.svg"
import iconOne from "/images/pmt.svg"
import iconTwo from "/images/tpv.svg"
import iconThree from "/images/api.svg"
import Tobi from "/images/maxresdefault.jpg"
import logo1 from "/images/vee.png"
import logo2 from "/images/errandpay-logos.png"
import logo3 from "/images/asset-matrix.png"
import logo4 from "/images/inv4.png"
import logo5 from "/images/download.webp"
import pos from "/images/patners.jpg"
import dreamMaker from "/images/happy patners.jpg"
import feat from "/images/feat1.png"

// importing videos
import newscast from "/videos/video 3.mp4"

// importing fonts
import rightarrow from "/icons/arrow-right.svg"

import "../App.css"

// import components
import Footer from "../component/Footer"

function HeroSection() {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="row">
          <div className="text col-lg-6">
            <div className="rounded-pill">
             <img src={heart} id="heart"/>
             <span>You made us to be here for you.</span>
            </div>
            <h1>Stay in control of your money with a BEST account.</h1>
            <p>Creating Financial Impact is our continually focus within the fintech microfinance Institution in Nigeria and across-board.</p>
            <button className="btn btn-lg ">Join us</button>
          </div>
          <div className="image col-lg-6">
            <div className="imagebox">
              <img src={feat} id="secondImg" />            
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-text">
          <h3>About BGP Microfinance Bank</h3>
          <p>BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. Its headquarters are located at 111 Calabar Road, Calabar South LGA, Cross River State. <br />
          BEST is a fintech company on a mission to create financial services that are more accessible, affordable, and rewarding for everyone.</p>
        </div>
        <div className="wave-div"></div>
      </section>
      
      <section className="offers">
        <div id="intro" className="col-lg-6">
          <h2>Here are our BEST offers.</h2>
          <p>Our Integrity 100%, Transparency 100%, Professionalism 100%, Customer Care Satifaction are guaranteed</p>
        </div>
        <div className="container-fluid row items">
            {data.map((item)=>{
                 return  <div
                 key={item.id}
                 className={item.className}
                 style={{ backgroundImage: `url(${item.image})` }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#">{item.link}</a>
                </div>
            })}
          </div>
      </section>

      <section className=""></section>

      <section className="trusted">
        <h1>Trusted by <span>2,000,000+</span> businesses</h1>
        <div className="parent-cont container">
            <div className="child-cont">
              <div><img src={iconOne} /></div>
              <div>
                <h4>5,000</h4>
                <p>New Clients Joined us</p>
              </div>
            </div>
            <div className="child-cont">
              <div><img src={iconTwo} alt="" srcset="" /></div>
              <div>
                <h4>80M</h4>
                <p>New Clients Joined us</p>
              </div>
            </div>
            <div className="child-cont">
              <div><img src={iconThree} /></div>
              <div>
              <h4>3</h4>
              <p>Business locaions in Cross River State</p>
              </div>
            </div>
        </div>
      </section>

      <section className="investors trusted container">
        <div className="start">
          <h4>Our Partners</h4>
          <p>We have partnered with nine payment Service Banks, which includes:  Asset Matrix MFB,  VFD MFB,  Errandpay.</p>
        </div>

        <div className="rollers carousel-container">
          <div className="carousel-wrapper">
            <img src={logo1} className="logos" />
            <img src={logo2} className="logos"/>
            <img src={logo3} className="logos" id="assest"  />
            <img src={logo4} className="logos" />
            <img src={logo5} className="logos" />
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

      <Footer description = "BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. Its headquarters are located at 111 Calabar Road, Calabar South LGA, Cross River State." />
      <BackToTop />
    </>
  )
}

export default HeroSection