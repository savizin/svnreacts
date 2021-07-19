import React from "react";
import ItemCount from "../itemcount/ItemCount.jsx";
import "../item/itemDetail.css";

function ItemDetail ({itemDetail}) {
    return (
    <>
        <div className="tarjetaDetail"> 
        <img className="imagenDetail" src={itemDetail.img1} alt="itemDetail"/>
            <div className="textoDetail">
                <small>{itemDetail.nb}</small>
                <small>{itemDetail.med}</small>
                <small>${itemDetail.precio}</small>
            </div>
            <div className="contDetail">
                <ItemCount inicial={0} stock={3}/>       
            </div>
            <button className="botonDetail">COMPRAR</button>
        </div>
    </>
    )
}

export default ItemDetail;