import apple from "/images/apple.svg"
import playstore from "/images/playstore.svg"
import { Link } from "react-router-dom";



function Footer(props) {
    return <>
        <footer>
            <div className="firstBar row container-fluid">
                <div className="footerAbout col-lg-5">
                    {/* <img src={logo} className="moniepoint"/> */}
                    <a href="#" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "23px" }}>BGP Micro-finance Institute</a>
                    <p id="description" style={{ marginTop: "15px" }}>
                        {props.description}
                    </p>
                    <div className="download">
                        <div className="apple">
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="nav-link">
                                <img src={apple} alt="Apple Store" />
                                <div className="getIt">
                                    <p>Get it on</p>
                                    <h6>Apple</h6>
                                </div>
                            </a>
                        </div>
                        <div className="playstore">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="nav-link">
                                <img src={playstore} alt="Google Play Store" />
                                <div className="getIt">
                                    <p>Get it on</p>
                                    <h6>Playstore</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="col-lg-2 links">
                    <li><Link to="/" className="nav-link">Solutions</Link></li>
                    <li><Link to="/banking" className="nav-link">Loan</Link></li>
                    <li><Link to="/BusinessManagement" className="nav-link">Business Management</Link></li>
                </ul>
                <ul className="col-lg-2 links">
                    <li><Link to="/about" className="nav-link">About Us</Link></li>
                    <li><Link to="/resources" className="nav-link">Resources</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                </ul>
                <ul className="col-lg-3 links">
                    <li><Link to="/payments" className="nav-link">Payments</Link></li>
                    <li><Link to="/banking" className="nav-link">Banking</Link></li>
                    <li><Link to="/privacy-policy" className="nav-link">Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    </>
}

export default Footer