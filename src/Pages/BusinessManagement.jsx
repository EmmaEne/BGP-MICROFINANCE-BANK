import Header from "../component/Header"
import BackToTop from "../component/BackToTop"
import FAQ from "../component/Faq"
import GetStarted from "../component/GetStarted"
import data from "../businessAbout"
import HeroCarousel from "../component/HeroCarousel"

// importing images

import logo1 from "/images/9psb-removebg-preview.png"
import logo2 from "/images/ammfib-removebg-preview.png"
import logo3 from "/images/fcmb-removebg-preview.png"
import logo4 from "/images/vfd_mfi_b-removebg-preview.png"
import logo5 from "/images/wirelesspay-removebg-preview.png"
import logo6 from "/images/errandpay-logos.png"
import pattern from "/images/patterns3-removebg-preview.png"
import model2 from "/images/moneyy.png"
import festivalModels from "/images/model1-removebg-preview.png"
import model3 from "/images/woman1.png"


import "../App.css"
import "../index.css"

// import components
import Footer from "../component/Footer"

const carouselItems = [
  {
    title: "Maximize Your Business with Our Banking Services.",
    text: "At BGP, we understand the unique needs of businesses. Whether you're a startup or an established enterprise, our Business Banking solutions are designed to offer flexibility, efficiency, and growth opportunities to support your success.",
    image: model3,
  },
  {
    title: "Quick Business Loans for Your Growth.",
    text: "Access up to ₦2,000,000 with our Quick Loan Service—no collateral needed. Secure your short-term financing today!.",
    image: model2,
  },
  {
    title: "Business Account Reactivation.",
    text: "Reignite your Business Account and access tailored support to help your business thrive..",
    image: festivalModels,
  },
];

const businessFaqs = [
  {
    question: "What documents are required to open a Business Account?",
    answer:
      "To open a Business Account, you will need proof of business registration, identification, and other necessary documents based on your business structure.",
  },
  {
    question: "How can I apply for a Quick Loan?",
    answer:
      "You can apply for a Quick Loan through our online portal or by visiting any of our branches. Our team will guide you through the application process.",
  },
  {
    question: "Can I access my business account from mobile devices?",
    answer:
      "Yes! Our online banking platform is mobile-optimized, allowing you to manage your account anytime, anywhere.",
  },
];


const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

function BusinessManagement() {
  return (
    <>
      <Header />
      <HeroCarousel
        carouselItems={carouselItems}
        style={{ background: "#ddeff8", color: "black" }}
      />
      <section className="offers mt-5">
        <div id="intro">
          <h2>Why Choose BEST for Your Business?</h2>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          {data.map((item) => (
            <div key={item.id} className={item.className}>
              <div className="card p-4" style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <ul className="list-unstyled">
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
        heading="Welcome to Our Service!"
        description="Join us today and take advantage of our exclusive offers. Special discounts available for early sign-ups!"
        buttonText="Sign Up Now"
        imgSrc={pattern}
        imgAlt="Business Loan Image"
      />
{/* 
      <GetStarted
        title=""
        description=""
        // extraText=""
        buttonText=""
      /> */}

      <FAQ faqs={businessFaqs} />

      <Footer description="BEST GLOBAL PAYMENT, a subsidiary of BEST MPCS LTD, was founded in Nigeria in 2008 as Best Savings Cooperative Society Limited. An upgraded liscence to best global payment, head office located at 111 calabar road, calabar south, LGA Cross river state." />
      <BackToTop />
    </>
  )
}

export default BusinessManagement




