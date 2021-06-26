import React from "react";
import "./Components.css";
import Carrito from "../imagen/carritocompras.png";

const ImagenCarrito = () => {
    return (
        <img className="img__carrito" src={Carrito} alt="carrito" />
    );
}

export default ImagenCarrito;