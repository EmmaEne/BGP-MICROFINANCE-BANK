import logo from "/images/logo-icon-white.svg"
import apple from "/images/apple.svg"
import playstore from "/images/playstore.svg"

function Footer(props) {
    return <>
        <footer>
            <div className="firstBar row container-fluid">
                <div className="footerAbout col-lg-5">
                    {/* <img src={logo} className="moniepoint"/> */}
                    <a href="#" style={{color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "23px"}}>BGP Micro-finance</a>
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
                    <li>Solutions</li>
                    <li>Credit</li>
                    <li>Payments</li>
                    <li>Banking</li>
                    <li>Business management</li>
                </ul>
                <ul className="col-lg-2 links">
                    <li>About us</li>
                    <li>Culture</li>
                    <li>Solutions</li>
                    <li>Credit</li>
                    <li>Banking</li>
                    <li>Payments</li>
                </ul>
                <ul className="col-lg-3 links">
                    <li>Resources</li>
                    <li>About us</li>
                    <li>Culture</li>
                    <li>Solutions</li>
                    <li>Credit</li>
                    <li>Payments</li>
                    <li>Banking</li>
                    <li>IMC Policy</li>
                </ul>
            </div>
        </footer>
    </>
}

export default Footer