import React, { useContext } from "react";
import "../formulario/formulario.css";
import firebase from "firebase";
import {database} from "../../firebase/firebase.jsx";
import { CartContext } from "../../context/CartContext";

const Formulario = () => {

    const {carrito, totalCarrito, limpiarCarrito} = useContext (CartContext);

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

        const ordenes = database.collection("ordenes");

        let ordenId;

        ordenes
        .add(nuevaOrden)
        .then((response) => {
            ordenId = response.id;
        })
        .catch((error) => {
            alert("ERROR: " + error);
        });

        const obrasElegidas = database.collection("obras")
        .where(
            firebase.firestore.FieldPath.documentId(),
            "in",
            carrito.map((itemDetail) => itemDetail.id)
        );
      
        obrasElegidas.get().then((query) => {

            const batch = database.batch();

            const obrasSinStock = []; 
        
            query.docs.forEach((doc, index) => {
                if (doc.data().stock >= nuevaOrden.obras[index].quantity) {
                    batch.update(doc.ref, {
                    stock: doc.data().stock - nuevaOrden.obras[index].quantity,
                    });
                } else {
                    obrasSinStock.push({ ...doc.data(), id: doc.id });
                }
            });

            {(obrasSinStock.length === 0) ? 
            (batch.commit().then(() => {
                alert("ORDEN GENERADA CON EXITO! \n ID: "+ ordenId);
                limpiarCarrito(); }
            )) : 
            (alert("ERROR: Hay obras que ya no cuentan con stock"))};

        });

    };
  
    return (
        <form onSubmit={manejarSubmit} className="formulario">
            <h1 className="formulario__titulo">FORMULARIO DE COMPRA</h1>
            <h2 className="formulario__subtitulo">Complete los siguientes datos:</h2>
            <ul>
                <li className="formulario__item">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre"/>
                </li>
                <li className="formulario__item">
                    <label for="apellido">Apellido:</label>
                    <input type="text" id="apellido"/>
                </li>
                <li className="formulario__item">
                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" placeholder="(código de área)número"/>
                </li>
                <li className="formulario__item">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email"/>
                </li>
            </ul>
            <button type="submit" className="formulario__boton">COMPRAR</button>
        </form>
    )
}

export default Formulario;