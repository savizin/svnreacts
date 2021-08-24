import React, { useContext } from "react";
import {MdShoppingCart} from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "../cartwidget/cartwidget.css";

const IconoCarrito = () => {

    const {carrito, cantidadCarrito} = useContext (CartContext);

    return (
        <div className="carrito">
            <Link to={"/carritocompras"}><MdShoppingCart className="imgCarrito"/></Link>
            {(carrito.length) ? 
            <span className="totalCarrito">{cantidadCarrito()}</span> : 
            null}
        </div>
    );
}

export default IconoCarrito;