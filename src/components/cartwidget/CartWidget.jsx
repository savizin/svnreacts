import React, { useContext } from "react";
import "../cartwidget/cartWidget.css";
import {MdShoppingCart} from "react-icons/md";
import { CartContext } from "../../context/CartContext";

const IconoCarrito = () => {

    const {cantidadCarrito, totalCarrito} = useContext (CartContext);

    return (
        <div className="carrito__carrito">
            <MdShoppingCart className="img__carrito"/>
            <p className="info">Cantidad: {cantidadCarrito()} </p>
            <p className="info">Total: ${totalCarrito()} </p>
        </div>
    );
}

export default IconoCarrito;