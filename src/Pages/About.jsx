import Header from "../component/Header"
import Footer from  "../component/Footer"
import BackToTop from "../component/BackToTop"
function About() {
    return <>
       <Header />
       <section className="intro row">
          <h2 className="col-lg-12">A brief detail on BEST</h2>
          <p className="col-lg-7">BEST GLOBAL PAYMENT is a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 by Job Emmanuel as Best Savings Cooperative Society Limited. Its headquarters are located at 111 Calabar Road, Calabar South LGA, Cross River State. We are a fintech company on a mission to create financial services that is more accessible, affordable and rewarding for all users</p>
          <button type="button" className="btn col-lg-12">Donate to BEST</button>
       </section>

       <section className="others row">
        <div className="features">
          <h3>Introducing our purpose</h3>
          <p>OUR  MISSION - Creating affordable financial payment unit to the public.
          OUR VISION - To create easy financial Impact to the people.
          Creating Financial  Impact is our continually focus within the fintech microfinance Institution in Nigeria and across-board.  </p>    
          <button type="button" className="btn btn-lg">Learn more</button>
        </div>
        <div className="features">
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
       <Footer description = "BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. Its headquarters are located at 111 Calabar Road, Calabar South LGA, Cross River State." />
       <BackToTop />
    </>
}

export default About