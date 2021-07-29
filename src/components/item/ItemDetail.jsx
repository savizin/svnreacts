import React, {useContext, useState} from "react";
import "../item/itemDetail.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail ({itemDetail}) {

const [contador, setContador] = useState (0);   

    const sumar = () => {
        contador < 3 && setContador (contador + 1)
    }
    
    const restar = () => {
        contador > 1 && setContador (contador - 1);
    }

const {agregarAlCarrito, carrito, eliminarDelCarrito} = useContext(CartContext);
console.log(carrito);

    function agregarProducto () { 
        agregarAlCarrito ({...itemDetail, cantidad: contador});
    }

    function borrarProducto () {
        eliminarDelCarrito (itemDetail.id);
    }

    return (
    <div className="tarjetaDetail"> 
        <img className="imagenDetail" src={itemDetail.img1} alt="itemDetail"/>
        <div className="textoDetail">
            <small>{itemDetail.nb}</small>
            <small>{itemDetail.med}</small>
            <small>${itemDetail.precio}</small>
        </div>
        <div className="contador">
            <button className="contador__boton" onClick={restar}>-</button>
            <span className="contador__num">{contador}</span>
            <button className="contador__boton" onClick={sumar}>+</button>
        </div>
        <div className="botones">    
            <button className="botonAgregar" onClick={agregarProducto}>Agregar al carrito</button>
            <button className="botonEliminar" onClick={borrarProducto}>Eliminar producto</button>
        </div>
        <button className="botonInicio"><Link to={"/"}>Seguir comprando</Link></button>
    </div>
    )
}

export default ItemDetail;