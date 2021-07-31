import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import "../cart/cart.css";

function ItemCart ({itemDetail}) {

    const {eliminarDelCarrito} = useContext (CartContext);

    function borrarProducto () {
        eliminarDelCarrito (itemDetail.id);
    }

    return (
        <div className="itemcart">
            <img className="itemcart__img" src={itemDetail.img1} alt="itemDetail"/>
            <div className="itemcart__descripcion">
                <small>Obra: "{itemDetail.nb}"</small>
                <small>Medida: {itemDetail.med}</small>
                <small>Precio: ${itemDetail.precio}</small>
                <small>Cantidad: {itemDetail.cantidad}</small>
            </div>
            <div className="itemcart__borrar">
                <MdDeleteForever onClick={borrarProducto} className="itemcart__borrar--tacho"/>
            </div>
        </div>
    )

}

export default ItemCart;