import Header from "../component/Header"
import Footer from "../component/Footer"
import BackToTop from "../component/BackToTop"

import scale from "/images/going_up-removebg-preview.png"
import model2 from "/images/model2-removebg-preview.png"
import wallpaper from "/images/wallpaper3.jpg"

function About() {
  return <>
    <Header />
    <section className="intro row">
      <div  className="col-lg-6">
        <h2>A brief detail on BEST</h2>
        <p>BEST GLOBAL PAYMENT is a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008  by Job Emmanuel as Best Savings Cooperative Society Limited. Its headquarters are located at 111 Calabar   Road, Calabar South LGA, Cross River State. We are a fintech company on a mission to create financial   services that is more accessible, affordable and rewarding for all users</p>
      </div>
      <img src={model2} alt="" className="col-lg-6 imagebox"style={{width: "320px", height: "360px"}} />
    </section>

    <section className="others row">
      <div className="features" style={{backgroundImage: "url('/images/wallpaper3.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "bottom"}}>
        <h3>Introducing our purpose</h3>
        <p>OUR  MISSION - Creating affordable financial payment unit to the public.
          OUR VISION - To create easy financial Impact to the people.
          Creating Financial  Impact is our continually focus within the fintech microfinance Institution in Nigeria and across-board.  </p>

      </div>
      <div className="features" style={{backgroundImage: "url('/images/wallpaper3.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "bottom"}}>
        <h3>Have you heard about LOWO? </h3>
        <p>In June 2023, we launched our app, Lowo, providing users with internet-enabled smartphones the ability   to operate a full bank account, save and earn interest, access instant credit, and transfer money without   exorbitant fees. </p>
        <button type="button" className="btn btn-lg">Download now</button>
      </div>
    </section>

    <section className="properties">
      <h3>What we've got.</h3>
      <p>We offer easy banking channels tailored to your needs, including:</p>
      <div className="row container">
        <button className="the-offers">Best Mobile Banking</button>
        <button className="the-offers">Best USSD Banking </button>
        <button className="the-offers">Best Internet Banking</button>
        <button className="the-offers">Best WhatsApp Banking</button>
        <button className="the-offers">ATM Cards</button>
      </div>
    </section>
    <Footer description="BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. An upgraded liscence to best global payment, head office located at 111 calabar road, calabar south, LGA Cross river state." />
    <BackToTop />
  </>
}

export default About