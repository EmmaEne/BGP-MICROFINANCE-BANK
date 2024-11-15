import { useState, useEffect } from "react";
import "../BackToTop.css"; // Create a CSS file for styling

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Toggle visibility based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // Adjust threshold if needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    isVisible && (
      <button className="back-to-top" onClick={scrollToTop}>
        <img src="/images/back-to-top.svg" alt="" srcset="" />
      </button>
    )
  );
}

export default BackToTop;
