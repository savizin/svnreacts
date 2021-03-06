import React from "react";
import {MdDirectionsBus} from "react-icons/md";
import {MdCreditCard} from "react-icons/md";
import {MdHttps} from "react-icons/md";
import Face from "../../imagenesfooter/face.png";
import Insta from "../../imagenesfooter/insta.png";
import Arroba from "../../imagenesfooter/arroba.png";
import Localizacion from "../../imagenesfooter/localizacion.png";
import Planeta from "../../imagenesfooter/planeta.png";
import "../footer/footer.css";

function Footer () {
    return (
    <footer className="footer">
        <div className="footer1"> 
            <MdDirectionsBus/><small className="footer1Small">ENVÍOS A TODO EL PAÍS</small>
            <MdCreditCard/><small className="footer1Small">HASTA 6 CUOTAS</small>
            <MdHttps/><small className="footer1Small">SITIO SEGURO</small>
        </div>
        <div className="footer2"> 
            <h3 className="footer2__h3">Seguime y contactame:</h3>
            <div> 
                <a href="http://www.instagram.com/svn.arteencolores" target="_blank" rel="noopener noreferrer"><img src={Insta} alt="instagram"/></a>  
                <a href="https://www.facebook.com/arteencolores.svn" target="_blank" rel="noopener noreferrer"><img src={Face} alt="facebook"/></a>
                <a href="mailto:arteencolores123@gmail.com"><img src={Arroba} alt="correoelectronico"/></a>
            </div>
        </div>
        <div className="ubicacion"> 
            <a href="https://www.google.com/maps/place/San+Francisco,+C%C3%B3rdoba/@-31.4231819,-62.1282483,13z/data=!3m1!4b1!4m5!3m4!1s0x95cb28228bc1d067:0x8f04abfe8c3700f4!8m2!3d-31.4249992!4d-62.0841599" target="_blank" rel="noopener noreferrer"><img src={Localizacion} alt="localizacion"/></a>
            <p>¡De San Francisco para todo el mundo!</p>
            <img src={Planeta} alt="planeta"/>
        </div>
        <div className="copyright">&copy; 2021 - Página creada por Savi - Todos los derechos reservados</div> 
    </footer>
    )
}

export default Footer;