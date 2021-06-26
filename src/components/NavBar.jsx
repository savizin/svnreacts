import React from "react";
import "./Components.css";
import Paleta from "../imagen/paleta.png";
import Carrito from "../components/CartWidget.jsx";

const NavBar = () => {
    return (
    <nav className="nav">
        <img className="nav__img" src={Paleta} alt="pincel"/>
        <strong>OBRAS</strong>
        <ul className="nav__lista">
            <li className="nav__item">Categoría 1</li>
            <li className="nav__item">Categoría 2</li>
            <li className="nav__item">Categoría 3</li>
        </ul>
        <Carrito  />
    </nav>
    );
}

export default NavBar;