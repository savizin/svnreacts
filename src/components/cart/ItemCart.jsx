import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import "../cart/cart.css";

function ItemCart ({itemDetail}) {

    const {eliminarDelCarrito, cantidadCarrito, totalCarrito} = useContext (CartContext);

    function borrarProducto () {
        eliminarDelCarrito (itemDetail.id);
    }

    return (
        <>
            <p className="cart__titulo">RESUMEN DE TU COMPRA:</p>
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
            <div className="cart__totales">
                <p className="info">Cantidad: {cantidadCarrito()}</p>
                <p className="info">Total: ${totalCarrito()}</p>
            </div>
        </>
    )

}

export default ItemCart;