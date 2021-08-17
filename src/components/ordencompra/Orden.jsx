import React, { useContext } from "react";
import {database} from "../../firebase/firebase.jsx";
import { CartContext } from "../../context/CartContext";
import "../ordencompra/orden.css";

const Orden = ({itemDetail}) => {

const {cantidadCarrito, totalCarrito} = useContext (CartContext);

    return (
    <>
        <strong className="tituloOrden">ORDEN DE COMPRA Nº </strong>
        <div className="cuerpoOrden">
            <img className="ordenImg" src={itemDetail.img} alt="itemDetail"/>
            <div className="ordenDescripcion">
                <small>Obra: "{itemDetail.nombre}"</small>
                <small>Medida: {itemDetail.medida}</small>
                <small>Precio: ${itemDetail.precio}</small>
                <small>Cantidad: {itemDetail.cantidad}</small>
            </div>
            <div className="datos">
                <p className="datosCantidad">Cantidad: {cantidadCarrito()}</p>
                <p className="datosTotal">Total: ${totalCarrito()}</p>
            </div>
        </div>
    </>
    )

}

export default Orden;