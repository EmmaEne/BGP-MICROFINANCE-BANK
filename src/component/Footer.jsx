import logo from "/images/logo-icon-white.svg"
import apple from "/images/apple.svg"
import playstore from "/images/playstore.svg"

function Footer(props) {
    return <>
        <footer>
            <div className="firstBar row container-fluid">
                <div className="footerAbout col-lg-5">
                    {/* <img src={logo} className="moniepoint"/> */}
                    <a href="#" style={{color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "23px"}}>BGP Micro-finance Institute</a>
                    <p id="description" style={{marginTop: "15px"}}>
                        {props.description}
                    </p>
                    <div className="download">
                        <div className="apple">
                            <img src={apple} />
                            <div className="getIt">
                                <p>Get it on</p>
                                <h5>Apple</h5>
                            </div>
                        </div> 
                        <div className="playstore">
                            <img src={playstore} />
                            <div className="getIt">
                                <p>Get it on</p>
                                <h5>Playstore</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="col-lg-2 links">
                    <li><a href="#" className="nav-link">Solutions</a></li>
                    <li><a href="#" className="nav-link">Loan</a></li>
                    <li><a href="#" className="nav-link">Business management</a></li>
                </ul>
                <ul className="col-lg-2 links">
                    <li><a href="#" className="nav-link">About us</a></li>
                    <li><a href="#" className="nav-link">Resources</a></li>
                    <li><a href="#" className="nav-link">Contact us</a></li>
                </ul>
                <ul className="col-lg-3 links">
               
                    <li><a href="#" className="nav-link">Payments</a></li>
                    <li><a href="#" className="nav-link">Banking</a></li>
                    <li><a href="#" className="nav-link">Privacy Policy</a> </li>
                </ul>
            </div>
        </footer>
    </>
}

export default Footer