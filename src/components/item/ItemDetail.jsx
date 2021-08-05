import React, {useContext, useState} from "react";
import "../item/itemDetail.css";
import Contador from "../contador/Contador";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail ({itemDetail}) {

const [contador, setContador] = useState (1);   

const {agregarAlCarrito, carrito, editarCarrito, verificarCarrito} = useContext(CartContext);
console.log(carrito);

    function agregarProducto () { 
        if (verificarCarrito(itemDetail.id)) {
            editarCarrito ({...itemDetail, cantidad: contador})
        }
        else {
            agregarAlCarrito ({...itemDetail, cantidad: contador});
        }
    }

    return (
    <div className="tarjetaDetail"> 
        <img className="imagenDetail" src={itemDetail.img} alt={itemDetail.nombre}/>
        <div className="textoDetail">
            <small>{itemDetail.nombre}</small>
            <small>{itemDetail.medida}</small>
            <small>${itemDetail.precio}</small>
        </div>
        <Contador contador={contador} setContador={setContador}/>
        <div className="botones">   
            <button className="botonAgregar" onClick={agregarProducto}>Agregar al carrito</button>
        </div>
        <button className="botonInicio"><Link to={"/"}>Seguir comprando</Link></button>
    </div>
    )
}

export default ItemDetail;