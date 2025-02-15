const HeroCarousel = ({ carouselItems, style = {} }) => {
    return (
      <section className="hero-section" style={style}>
        <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-indicators">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="row align-items-center">
                  <div className="text col-lg-6">
                    <div className="rounded-pill"></div>
                    <div className="rounded-pill" style={{ width: "40%" }}></div>
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                    <button className="btn btn-lg btn-primary rounded-pill" style={{ width: "170px", height: "50px" }}>
                      Join us
                    </button>
                  </div>
                  <div className="image col-lg-6">
                    <div className="imagebox">
                      <img src={item.image} className="d-block w-100 img-fluid" alt="Feature" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroCarousel;
  