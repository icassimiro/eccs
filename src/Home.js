import eccs from "./Images/eccs.png"; import { BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function Home() {
    return (
        <div className="color">
            <div className="divinfotop">
                <div>
                    <h2 className="eccstexttop">ECCS GDOC</h2>

                </div>

                <div className="divsocialtop"><a className="buttonwpp" href="https://wa.me/31992479224" target="_blank" rel="noreferrer" ><h2 className="wpp">Whatsapp <AiOutlineWhatsApp className="iconssocial" /></h2></a></div>

            </div>
            <div className="divzero">  <h2 className="zero1">01</h2></div>


            <div className="eccs">
                <h1 className="eccstext">
                    ECCS
                    <img src={eccs} alt="ECCS Logo" className="eccsimg floating" />
                </h1>
            </div>

            <div>
                <h2 className="eccstextbottom">
                    Organize seus documentos, otimize processos e leve a eficiência da sua empresa para outro nível.
                </h2>
            </div>
        </div>
    )
}