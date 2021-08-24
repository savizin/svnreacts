import React from "react";
import {Link} from "react-router-dom";
import "../../components/item/item.css";

function Item ({obra}) {    

    return (
    <div className="tarjeta"> 
        <img className="imagenTarj" src={obra.img} alt={obra.nombre}/>
        <div className="textoTarj">
            <small>{obra.nombre}</small>
            <small>{obra.medida}</small>
            <small>${obra.precio}</small>
        </div>
        <Link to={`/detalleobra/${obra.id}`}><button className="botonTarj">Ver más</button></Link>
    </div>
    )

}

export default Item;