import React from "react";
import "../item/item.css";
import {Link} from "react-router-dom";

function Item ({item}) {
    return (
    <>
    <div className="tarjeta"> 
        <img className="imagenTarj" src={item.img1} alt="obra"/>
        <div className="textoTarj">
            <small>{item.nb}</small>
            <small>{item.med}</small>
            <small>${item.precio}</small>
        </div>
        <button className="botonTarj"><Link to={`/detalleobra/${item.id}`}>Ver más</Link></button>
    </div>
    </>
    )
}

export default Item;