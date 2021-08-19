import React, {useEffect, useState} from "react";
import {database} from "../../firebase/firebase.jsx";
import { useParams } from "react-router-dom";
import Spiner from "../spiner/Spiner.jsx";
import swal from 'sweetalert';
import "../ordencompra/orden.css";
import DetalleOrden from "./Detalleorden.jsx";

const Orden = (props) => {

const [displayOrden, setdisplayOrden] = useState([]);

const {idOrden} = useParams();

    const ordenCompra = () => {

        const ordenGenerada = database
        .collection ("ordenes") 
        .doc (idOrden)
    
        ordenGenerada.get().then ((doc) => {
            if (doc.exists) {
                setdisplayOrden ({...doc.data(), id: doc.id})
            } else {
                swal({title: "ERROR EN LA CONSULTA"})
            }
        });        
    }

useEffect(() => {
    ordenCompra();
}, [idOrden]);

    return (
        <>{(Object.entries(displayOrden).length !== 0) ? 
          (<DetalleOrden ordenGenerada={displayOrden}/>) : 
          (<Spiner/>)}
        </>
    );
}

export default Orden;