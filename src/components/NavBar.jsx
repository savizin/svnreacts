import React from "react";
import "./NavBar.css";
import Paleta from "../imagen/paleta.png";

const NavBar = () => {
    return (
    <nav className="nav">
        <img className="nav__img" src={Paleta} alt="pincel"/>
        <strong>OBRAS</strong>
        <ul className="nav__lista">
            <a><li className="nav__item">Categoría 1</li></a>
            <a><li className="nav__item">Categoría 2</li></a>
            <a><li className="nav__item">Categoría 3</li></a>
        </ul>
    </nav>
    );
}

export default NavBar;