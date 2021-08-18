import React, { useContext } from "react";
import {database} from "../../firebase/firebase.jsx";
import { CartContext } from "../../context/CartContext"
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import firebase from "firebase";
import "../formulario/formulario.css";

const Formulario = () => {

    const {carrito, totalCarrito, limpiarCarrito} = useContext (CartContext);

    let history = useHistory();

    const limpiarFormulario = () => {
        document.getElementById("formulario").reset();
    }

    const manejarSubmit = (event) => {

        event.preventDefault();
        
        const datosComprador = {
            nombre: event.target.nombre.value,
            apellido: event.target.apellido.value,
            telefono: event.target.telefono.value,
            email: event.target.email.value,
        };
    
        const nuevaOrden = {
            comprador: datosComprador,
            obras: carrito,
            fecha: new Date().toString(),
            total: totalCarrito(),
        };

        const ordenes = database.collection("ordenes")
        const obrasArte = database.collection("obras")

        ordenes
            .add({nuevaOrden})
            .then((refDoc) => {
                carrito.map((itemDetail) => {
                    const decrement = itemDetail.cantidad;
                    obrasArte.doc(itemDetail.id)
                        .update({stock: firebase.firestore.FieldValue.increment(-decrement)});
                })

                let idOrden = refDoc.id
                swal({
                    title: "¡ORDEN GENERADA CON ÉXITO!",
                    text: "ID: " + idOrden,
                    icon: "success",
                });           
                limpiarCarrito();
                limpiarFormulario();
                history.push("/ordencompra");
            });
    }

    return (
        <form onSubmit={manejarSubmit} className="formulario" id="formulario">
            <h1 className="formularioTitulo">FORMULARIO DE COMPRA</h1>
            <h2 className="formularioSubtitulo">Complete los siguientes datos:</h2>
            <ul>
                <li className="formularioItem">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre"/>
                </li>
                <li className="formularioItem">
                    <label for="apellido">Apellido:</label>
                    <input type="text" id="apellido"/>
                </li>
                <li className="formularioItem">
                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" placeholder="(código de área)número"/>
                </li>
                <li className="formularioItem">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email"/>
                </li>
            </ul>
            <button type="submit" className="formularioBoton">COMPRAR</button>
        </form>
    )

}

export default Formulario;