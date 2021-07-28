import React, {useContext} from "react";
import ItemCount from "../itemcount/ItemCount.jsx";
import "../item/itemDetail.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail ({itemDetail}) {

const {agregarAlCarrito, carrito, eliminarDelCarrito} = useContext(CartContext);
console.log(carrito);

function agregarProducto () { 
    agregarAlCarrito (itemDetail);
}

function borrarProducto () {
    eliminarDelCarrito (itemDetail.id);
}

    return (
    <div className="tarjetaDetail"> 
        <img className="imagenDetail" src={itemDetail.img1} alt="itemDetail"/>
        <div className="textoDetail">
            <small>{itemDetail.nb}</small>
            <small>{itemDetail.med}</small>
            <small>${itemDetail.precio}</small>
        </div>
        <ItemCount />
        <div className="botones">    
            <button className="botonAgregar" onClick={agregarProducto}>Agregar al carrito</button>
            <button className="botonEliminar" onClick={borrarProducto}>Eliminar producto</button>
        </div>
        <button className="botonInicio"><Link to={"/"}>Seguir comprando</Link></button>
    </div>
    )
}

export default ItemDetail;