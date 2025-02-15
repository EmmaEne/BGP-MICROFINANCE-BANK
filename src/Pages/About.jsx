import Header from "../component/Header"
import Footer from "../component/Footer"
import BackToTop from "../component/BackToTop"

import scale from "/images/going_up-removebg-preview.png"
import model2 from "/images/huh-removebg-preview.png"
// import wallpaper from "/images/wallpaper3.jpg"

function About() {
  return <>
    <Header />
    <section className="intro row m-auto">
      <div className="col-lg-7 pt-5">
        <h2 className="text-white">A brief detail on BEST</h2>
        <p>BEST GLOBAL PAYMENT is a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008  by Job Emmanuel as Best Savings Cooperative Society Limited. Its headquarters are located at 111 Calabar   Road, Calabar South LGA, Cross River State. We are a fintech company on a mission to create financial   services that is more accessible, affordable and rewarding for all users</p>
      </div>
      <div className="col-lg-5">
        <img src={model2} alt="" className="col-lg-6 imagebox" style={{width: "324px", objectFit: "contain", position: "relative", bottom: "10%"}} />
      </div>
    </section>

    <section className="others row container-fluid m-auto">
      <div className="features" style={{ backgroundImage: "url('/images/wallpaper3.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }}>
        <h3>Introducing our purpose</h3>
        <p><span className="fw-bold">OUR  MISSION</span> - Creating affordable financial payment unit to the public. <br /><br />
          <span className="fw-bold">OUR  VISION</span> - To create easy financial Impact to the people.
          Creating Financial  Impact is our continual focus within the fintech microfinance Institution in Nigeria and across-board.  </p>

      </div>
      <div className="features" style={{ backgroundImage: "url('/images/wallpaper3.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "bottom" }}>
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

    <section className="row container-fluid m-auto">
      <div className="col-lg-6 d-flex flex-column justify-content-center" style={{ background: "white", padding: "25px" }}>
        <h3>We offer loans with easy payment structure</h3>
        <p>We’ve made loans easily accessible to you to help you reach your goals and stay in control. Unlock higher loan amounts by transacting with your account  on Mobile App, USSD, Internet Banking and others of our banking channels.</p>
        <button className="btn w-50">Start now</button>
      </div>
      <div className="col-lg-6 d-flex justify-content-center approve" style={{ background: "#0e46bf" }}>
        <img src="/images/approved2-removebg-preview.png" alt="" />
      </div>  
    </section>

    <section className="row container-fluid m-auto" style={{ background: "#b3caff" }}>
      <div className="col-lg-6 d-flex justify-content-center">
        <img src="/images/pos_machine1-removebg-preview.png" alt="" />
      </div>
      <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
        <h3>BEST POS terminals that meet your specific needs</h3>
        <ul style={{padding: "0"}}>
          <li className="nav-link">Online Payments For Every Business</li>
          <li className="nav-link">Best network uptime & lowest charges rate</li>
          <li className="nav-link">Smart in receiving payments</li>
          <li className="nav-link">Smart in receiving payments</li>
          <li className="nav-link">Fast dispute resolution</li>
          <li className="nav-link">Strong hardware pos & Long-life battery</li>
          <li className="nav-link">Beep Alert Notification on transactions</li>
          <li className="nav-link">EOD reports for easier reconciliation</li>
        </ul>
        <button className="btn btn-primary request">Request now</button>
      </div>
    </section>
    <Footer description="BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. An upgraded liscence to best global payment, head office located at 111 calabar road, calabar south, LGA Cross river state." />
    <BackToTop />
  </>
}

export default About