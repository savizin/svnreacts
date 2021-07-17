import React from "react";
import "../footer/footer.css";

function Footer () {
    return (
    <footer className="colorpiepag">
        <div className="footer1"> 
            <img src="https://via.placeholder.com/300" alt="camión"/> <small>ENVÍOS A TODO EL PAÍS</small>
            <img src="https://via.placeholder.com/300" alt="tarjeta de crédito"/> <small>HASTA 6 CUOTAS</small>
            <img src="https://via.placeholder.com/300" alt="candado cerrado"/> <small>SITIO SEGURO</small>
        </div>
        <div className="footer2"> 
            <h3 className="footer2__h3">Seguime y contactame:</h3>
            <div> 
                <a href="http://www.instagram.com/svn.arteencolores" target="_blank"><img src="https://via.placeholder.com/300" alt="instagram"/></a>  
                <a href="https://www.facebook.com/arteencolores.svn" target="_blank"><img src="https://via.placeholder.com/300" alt="facebook"/></a>
                <a href="mailto:arteencolores123@gmail.com"><img src="https://via.placeholder.com/300" alt="correoelectronico"/></a>
            </div>
        </div>
        <div className="ubicacion"> 
            <a href="https://www.google.com/maps/place/San+Francisco,+C%C3%B3rdoba/@-31.4231819,-62.1282483,13z/data=!3m1!4b1!4m5!3m4!1s0x95cb28228bc1d067:0x8f04abfe8c3700f4!8m2!3d-31.4249992!4d-62.0841599" target="_blank"><img src="https://via.placeholder.com/300" alt="localizacion"/></a>
            <p> De San Francisco para todo el mundo!!!</p>
            <img src="https://via.placeholder.com/300" alt="planeta"/>
        </div>
        <div className="copyright"> &copy; 2021 - Página creada por Savi - Todos los derechos reservados </div> 
    </footer>
    )
}

export default Footer;