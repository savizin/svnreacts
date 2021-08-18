import React, {useEffect, useState} from "react";
import {database} from "../../firebase/firebase.jsx";
import Spiner from "../spiner/Spiner.jsx";
import "../ordencompra/orden.css";

const Orden = (nuevaOrden) => {

const [displayOrden, setdisplayOrden] = useState([]);

const ordenCompra = () => {

    const ordenGenerada = database.collection ("ordenes") 
          
    ordenGenerada
      .get().then ((query) => 
        setdisplayOrden (
          query.docs.map((doc) => {
            return {...doc.data(), id: doc.id};
          })
        ));
    }

useEffect(() => {
    setdisplayOrden([]);
    ordenCompra();
}, []);

    return (
    <>  {displayOrden.length ?
        (displayOrden.map((ordenGenerada) => ( 
            <>
                <strong className="tituloOrden">ORDEN DE COMPRA Nº {ordenGenerada.id}</strong>
                <div className="cuerpoOrden">
                    <div className="ordenComprador">
                        <small>Nombre: </small>
                        <small>Apellido: </small>
                        <small>Teléfono: </small>
                        <small>Correo electrónico: </small>
                    </div>
                    <div className="ordenObra">
                        <img className="ordenObraImg" src={""} alt="imagen obra"/>
                        <small>Obra: </small>
                        <small>Medida: </small>
                        <small>Precio: </small>
                        <small>Cantidad: </small>
                    </div>
                    <div className="ordenTotales">
                        <p>Cantidad total: {}</p>
                        <p>Total: ${}</p>
                    </div>
                </div>
            </>))) : <Spiner />}
    </>
    )

}

export default Orden;