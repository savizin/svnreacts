import React from "react";
import "../item/item.css";
import {Link} from "react-router-dom";

function Item ({obra}) {    
    return (
    <div className="tarjeta"> 
        <img className="imagenTarj" src={obra.img} alt={obra.nombre}/>
        <div className="textoTarj">
            <small>{obra.nombre}</small>
            <small>{obra.medida}</small>
            <small>${obra.precio}</small>
        </div>
        <button className="botonTarj"><Link to={`/detalleobra/${obra.id}`}>Ver más</Link></button>
    </div>
    )
}

export default Item;