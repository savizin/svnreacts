import React from "react";
import "../ordencompra/detalleorden.css";

const DetalleOrden = ({ordenGenerada}) => {

    //Creación del formulario de la orden de compra
    return (
        <div className="orden">
            <strong className="tituloOrden">ORDEN DE COMPRA Nº {ordenGenerada.id}</strong>
            <div className="cuerpoOrden">
                <div className="ordenComprador">
                    <span>Datos comprador:</span>
                    <small className="datos">Nombre: {ordenGenerada.nuevaOrden.comprador.nombre}</small>
                    <small className="datos">Apellido: {ordenGenerada.nuevaOrden.comprador.apellido}</small>
                    <small className="datos">Teléfono: {ordenGenerada.nuevaOrden.comprador.telefono}</small>
                    <small className="datos">Correo electrónico: {ordenGenerada.nuevaOrden.comprador.email}</small>
                </div>
                <div className="ordenObra">
                    <span>Datos Obras:</span>
                    {ordenGenerada.nuevaOrden.obras.map
                    (dato => (
                        <div className="ordenDetalle1">   
                            <small className="datosTitulo">Obra: {dato.nombre}</small>
                            <small className="datos">Medida: {dato.medida}</small>
                            <small className="datos">Precio: ${dato.precio}</small>
                            <small className="datos">Cantidad: {dato.cantidad}</small>
                        </div>
                    ))}
                </div>
                <div className="ordenTotales">
                    <p>Total: ${ordenGenerada.nuevaOrden.total}</p>
                </div>
            </div>
            <strong className="pieOrden">¡GRACIAS POR TU COMPRA!</strong>
        </div>
    );
}

export default DetalleOrden;

               