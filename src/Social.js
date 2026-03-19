import { FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";


import { FaInstagramSquare } from "react-icons/fa";
export default function Social() {
    return (<div className="divsocial">
        <div className="divzero">

            <h2 className="zero4">05</h2>
            <div className="socialinfo">
                <div>
                    <h2 className="siga">Siga-nos</h2>
                    <div className="divsocials">
                        <FaInstagramSquare />
                        <h2 className="socials">Instagram</h2>
                    </div>
                    <div className="divsocials">
                        <FaLinkedin />
                        <h2 className="socials">Linkedin</h2>
                    </div>
                    <div className="divsocials">
                        <RiWhatsappFill />
                        <h2 className="socials">Whatsapp</h2>
                    </div>

                </div>
                <div>
                    <h2 className="eccstextinfo">ECCS GDOC</h2>
                </div>
            </div>
            <div className="divcopy"><h2 className="copy">©ECCS 2026.</h2></div>
        </div>
    </div>)
}