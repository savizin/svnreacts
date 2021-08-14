import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import "../cart/cart.css";

function ItemCart ({itemDetail}) {

    const {eliminarDelCarrito} = useContext (CartContext);

    function borrarProducto() {
        eliminarDelCarrito (itemDetail.id);
    }

    return (
        <div className="itemCart">
            <img className="itemCartImg" src={itemDetail.img} alt="itemDetail"/>
            <div className="itemCartDescripcion">
                <small>Obra: "{itemDetail.nombre}"</small>
                <small>Medida: {itemDetail.medida}</small>
                <small>Precio: ${itemDetail.precio}</small>
                <small>Cantidad: {itemDetail.cantidad}</small>
            </div>
            <div className="itemCartBorrar">
                <MdDeleteForever onClick={borrarProducto} className="itemCartTacho"/>
            </div>
        </div>
    )

}

export default ItemCart;