import React from "react";
import "../navbar/navBar.css";
import LogoNavBar from "./LogoNavBar";
import Carrito from "../cartwidget/CartWidget.jsx";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="nav">
        <LogoNavBar />
        <ul className="nav__lista">
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