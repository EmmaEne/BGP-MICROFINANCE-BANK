import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Install react-icons if needed

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container-fluid mt-5" style={{ padding: "3% 5%" }}>
      <h5>Our FAQs</h5>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item border rounded mb-3">
            <h2 className="accordion-header">
              <button
                className={`accordion-button d-flex justify-content-between align-items-center ${
                  openIndex === index ? "" : "collapsed"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openIndex === index ? "show" : ""
              }`}
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
