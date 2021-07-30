import React, { useContext } from "react";
import "../cartwidget/cartWidget.css";
import {MdShoppingCart} from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const IconoCarrito = () => {

    const {cantidadCarrito} = useContext (CartContext);

    return (
        <div className="carrito__carrito">
            <Link to={"/cart/cart"}><MdShoppingCart className="img__carrito"/></Link>
            <span className="total__carrito">{cantidadCarrito()}</span>
        </div>
    );
}

export default IconoCarrito;