import React from "react";
import SVN from "../../assets/imagenes/imgnav.png";
import "../navbar/navBar.css";

const LogoNavBar = () => {
    return (
        <img className="nav__img" src={SVN} alt="svn"/>
    )
}

export default LogoNavBar;