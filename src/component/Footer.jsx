import logo from "/images/logo-icon-white.svg"
import apple from "/images/apple.svg"
import playstore from "/images/playstore.svg"

function Footer() {
    return <>
        <footer>
            <div className="firstBar row container-fluid">
                <div className="footerAbout col-lg-5">
                    {/* <img src={logo} className="moniepoint"/> */}
                    <a href="#" style={{color: "white", marginBottom: "100px", textDecoration: "none", fontWeight: "bold"}}>BGP Micro-finance</a>
                    <p id="description">BGP Micro-finance Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quod modi dolorum qui placeat, similique exercitationem perspiciatis alias sint, assumenda unde, numquam ratione itaque voluptatum dolores aperiam dolor earum possimus.</p>
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
            <div className="secondBar">
                <ul className="col-lg-2">
                    <li>Solutions</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, doloribus.</li>
                </ul>
                <ul className="col-lg-2">
                    <li>About us</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, doloribus.</li>
                </ul>
                <ul className="col-lg-3">
                    <li>Resources</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, doloribus.</li>
                </ul>
            </div>
        </footer>
    </>
}

export default Footer