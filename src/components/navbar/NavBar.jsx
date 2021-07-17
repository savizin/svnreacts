import React from "react";
import "../navbar/navBar.css";
import Paleta from "../../assets/imagenes/paleta.png";
import Carrito from "../cartwidget/CartWidget.jsx";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="nav">
        <img className="nav__img" src={Paleta} alt="pincel"/>
        <strong>OBRAS</strong>
        <ul className="nav__lista">
            <li><Link to={"/"}>Inicio</Link></li>
            <li><Link to={"/categoria/c1"}>Categoría 1</Link></li>
            <li><Link to={"/categoria/c2"}>Categoría 2</Link></li>
            <li><Link to={"/categoria/c3"}>Categoría 3</Link></li>
        </ul>
        <Carrito  />
    </nav>
    );
}

export default NavBar;