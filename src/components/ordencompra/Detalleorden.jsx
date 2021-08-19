import React from "react";
import "../ordencompra/orden.css";

const DetalleOrden = ({ordenGenerada}) => {

    return (
        <>
            <strong className="tituloOrden">ORDEN DE COMPRA Nº {ordenGenerada.id}</strong>
            <div className="cuerpoOrden">
                <div className="ordenComprador">Datos comprador:
                    <small>Nombre: </small>
                    <small>Apellido: </small>
                    <small>Teléfono: </small>
                    <small>Correo electrónico: </small>
                </div>
                <div className="ordenObra">Datos obra:
                    <img className="ordenObraImg" src={""} alt="imagen obra"/>
                    <small>Obra: </small>
                    <small>Medida: </small>
                    <small>Precio: </small>
                    <small>Cantidad: </small>
                </div>
                <div className="ordenTotales">
                    <p>Cantidad total: </p>
                    <p>Total: $</p>
                </div>
            </div>
        </>
    );
}

export default DetalleOrden;

               