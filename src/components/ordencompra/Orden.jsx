import React, {useEffect, useState, useContext} from "react";
import {database} from "../../firebase/firebase.jsx";
import {CartContext} from "../../context/CartContext";
import Spiner from "../spiner/Spiner.jsx";
import "../ordencompra/orden.css";

const Orden = ({itemDetail}) => {

const {totalCarrito, cantidadCarrito} = useContext(CartContext);

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
    <>  {displayOrden[displayOrden.length - 1] ?
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
                        <p>Cantidad total: {cantidadCarrito()}</p>
                        <p>Total: ${totalCarrito()}</p>
                    </div>
                </div>
            </>))) : <Spiner />}
    </>
    )

}

export default Orden;