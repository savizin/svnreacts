import React from "react";
import {NavLink} from "react-router-dom";
import LogoNavBar from "./LogoNavBar.jsx";
import Carrito from "../cartwidget/CartWidget.jsx";
import "../navbar/nav.css";

const NavBar = () => {

    return (
    <nav className="nav">
        <LogoNavBar />
        <ul className="navLista">
            <li><NavLink to={"/"}>Inicio</NavLink></li>
            <li><NavLink to={"/categoria/c1"}>Categoría 1</NavLink></li>
            <li><NavLink to={"/categoria/c2"}>Categoría 2</NavLink></li>
            <li><NavLink to={"/categoria/c3"}>Categoría 3</NavLink></li>
        </ul>
        <Carrito  />
    </nav>
    );

}

export default NavBar;