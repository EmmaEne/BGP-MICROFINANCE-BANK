const GetStarted = ({ heading, description, buttonText, imgSrc, imgAlt }) => {
  return (
    <section className="loan-section">
      <div className="container-fluid row">
        <div className="loan-content col-lg-6 d-flex flex-column align-content-center justify-content-center">
          <h3>{heading}</h3>
          <p>{description}</p>
          <button className="btn loan-btn w-50">{buttonText}</button>
        </div>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="col-lg-6"
          style={{ width: '45%', height: '100%' }}
        />
      </div>
    </section>
  );
};

export default GetStarted;
