import React, {useContext} from "react";
import ItemCount from "../itemcount/ItemCount.jsx";
import "../item/itemDetail.css";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";

function ItemDetail ({itemDetail}) {

const {agregarAlCarrito, carrito, eliminarProducto} = useContext(CartContext);
console.log(carrito);

const [agregar, setAgregar] = useState (true);

function agregarProducto () {
    setAgregar (!agregar);  
    agregarAlCarrito([
        itemDetail.nb,
        itemDetail.med,
        itemDetail.precio,
    ]);
}

function borrarProducto () {
    eliminarProducto (itemDetail.id);
}

    return (
    <div className="tarjetaDetail"> 
        <img className="imagenDetail" src={itemDetail.img1} alt="itemDetail"/>
        <div className="textoDetail">
            <small>{itemDetail.nb}</small>
            <small>{itemDetail.med}</small>
            <small>${itemDetail.precio}</small>
        </div>
        <div className="contDetail">
            {agregar && (<ItemCount inicial={0} stock={3}/>) }      
            <button className="botonAgregar" onClick={agregarProducto}>Agregar al carrito</button>
            <button className="botonEliminar" onClick={borrarProducto}>Eliminar producto</button>
        </div>
    </div>
    )
}

export default ItemDetail;