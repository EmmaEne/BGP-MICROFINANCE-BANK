import Header from "../component/Header"
import data from "../about"

// importing images
import global from "/images/gb.svg"
import Lady from "/images/lady.jpg"
import iconOne from "/images/pmt.svg"
import iconTwo from "/images/tpv.svg"
import iconThree from "/images/api.svg"
import Tobi from "/images/maxresdefault.jpg"
import logo1 from "/images/inv1.png"
import logo2 from "/images/inv2.png"
import logo3 from "/images/inv3.png"
import logo4 from "/images/inv4.png"
import logo5 from "/images/download.webp"
import pos from "/images/owner.png"
import dreamMaker from "/images/dream-maker.png"
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
             <img src={global} />
             <span>Africa's fastest growing fintech 2023/2024</span>
            </div>
            <h1>Powering financial dreams in emerging markets.</h1>
            <p>BGP Micro-finance provides an all-in-one payments, banking and operations platform for businesses and their customers.</p>
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
        <div id="intro" className="col-lg-6">
          <h2>Simple financial solutions for businesses and their customers.</h2>
          <p>Here's how we help them grow without limits</p>
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

      <section className="trusted">
        <h1>Trusted by <span>2,000,000+</span> businesses</h1>
        <div className="parent-cont container">
            <div className="child-cont">
              <div><img src={iconOne} /></div>
              <div>
                <h4>200M</h4>
                <p>Api calls per minute</p>
              </div>
            </div>
            <div className="child-cont">
              <div><img src={iconTwo} alt="" srcset="" /></div>
              <div>
                <h4>$14B</h4>
                <p>Tpv monthly</p>
              </div>
            </div>
            <div className="child-cont">
              <div><img src={iconThree} /></div>
              <div>
              <h4>$14B</h4>
              <p>Payment proceeds monthly</p>
              </div>
            </div>
        </div>
      </section>

      <section className="container video">
        <video width="400" controls poster={Tobi}>
           <source src={newscast} type="video/mp4" />
           Your browser does not support HTML5 video.
        </video>
      </section>

      <section className="investors trusted container">
        <div className="start">
          <h4>Our Investors</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit doloremque laborum aliquam. Numquam, sequi sint.</p>
        </div>

        <div className="rollers carousel-container">
          <div className="carousel-wrapper">
            <img src={logo1} className="logos" />
            <img src={logo2} className="logos" />
            <img src={logo3} className="logos" />
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

      <Footer />
    </>
  )
}

export default HeroSection