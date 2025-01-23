import Header from "../component/Header";
import Footer from "../component/Footer";
import BackToTop from "../component/BackToTop";
function Contact() {
    return <>
        <Header />
        <div className="top">
            <h3>Contact us now for the BEST of banking services</h3>
        </div>
        <div className="contact-wave"></div>
        <div className="bottom"></div>
        <div className="user-form">
            <form>
                <h5 className="mb-5">Let's get to know you!</h5>
                <label htmlFor="fname">First name:</label>
                <input className="form-control" type="text" />
                <label htmlFor="lastname">Last name:</label>
                <input className="form-control" type="text" />
                <label htmlFor="email">Email:</label>
                <input className="form-control" type="text" />
                <label htmlFor="country">Country</label>
                <input className="form-control" type="text" />
                <label htmlFor="country">Phone Number</label>
                <input className="form-control" type="text" />
                <label htmlFor="extra">kindly drop a message:</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                <button className="btn submit">Submit</button>
            </form>
        </div>
        <Footer description = "111 Calabar road, calabar south, Cross river state, Nigeria. 151 Edim Otop Street bu Atimbo junction Calabar, Calabar Municipal, Cross River state.  C-line shop 468 Ekaeka Oqua Marian Market Calabar Municipal, Cross river state" />
        <BackToTop />
    </>
}

export default Contact;