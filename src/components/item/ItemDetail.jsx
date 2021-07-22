import React from "react";
import ItemCount from "../itemcount/ItemCount.jsx";
import "../item/itemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function ItemDetail ({itemDetail}) {

const [agregar, setAgregar] = useState (true);

function agregarProducto () {
    setAgregar (!agregar);  
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
            (<button className="botonFinalizar"><Link to={"/cart/cart"}>Finalizar compra</Link></button>)}      
        </div>
    </div>
    )
}

export default ItemDetail;