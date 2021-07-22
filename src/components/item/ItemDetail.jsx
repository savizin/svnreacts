import React, {useContext} from "react";
import ItemCount from "../itemcount/ItemCount.jsx";
import Botones from "./Botones.jsx";
import "../item/itemDetail.css";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";

function ItemDetail ({itemDetail}) {

const {agregarAlCarrito, carrito} = useContext(CartContext);
console.log(carrito);

const [agregar, setAgregar] = useState (true);

function agregarProducto () {
    setAgregar (!agregar);  
    agregarAlCarrito ({
        itemDetail,
    })
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
            {agregar ? (<ItemCount inicial={0} stock={3} agregarProducto={agregarProducto}/>) : 
            (<Botones />)}      
        </div>
    </div>
    )
}

export default ItemDetail;