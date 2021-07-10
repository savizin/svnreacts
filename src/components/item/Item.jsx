import React from "react";
import "../item/item.css";

function Item ({item}) {
    return (
    <>
    <div className="tarjeta"> 
        <img className="imagenTarj" src={item.img1} alt="obra"/>
        <div className="textoTarj">
            <small>{item.nb}</small>
            <small>{item.med}</small>
            <small>{item.precio}</small>
        </div>
    </div>
    </>
    )
}

export default Item;