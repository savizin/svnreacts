import React, {useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Contador from "../contador/Contador";
import "../item/itemDetail.css";

function ItemDetail ({itemDetail}) {

const [contador, setContador] = useState(1);   

const [confirmaCompra, setConfirmaCompra] = useState(false);

const {agregarAlCarrito, editarCarrito, verificarCarrito} = useContext(CartContext);

    function agregarProducto() { 
        setConfirmaCompra(true);
        if (verificarCarrito(itemDetail.id)) {
            editarCarrito({...itemDetail, cantidad: contador})
        }
        else {
            agregarAlCarrito({...itemDetail, cantidad: contador})
        };
    }

    return (
    <div className="tarjetaDetail"> 
        <img className="imagenDetail" src={itemDetail.img} alt={itemDetail.nombre}/>
        <div className="textoDetail">
            <small>{itemDetail.nombre}</small>
            <small>{itemDetail.medida}</small>
            <small>${itemDetail.precio}</small>
            <small>Stock disponible: {itemDetail.stock ? itemDetail.stock : "sin stock"}</small>
        </div>
        {!confirmaCompra ? 
        (<>
            {itemDetail.stock ? 
                (<>
                    <Contador inicial={1} stock={itemDetail.stock} contador={contador} setContador={setContador}/>
                    <button className="botones" onClick={() => agregarProducto()}>Agregar al carrito</button>
                </>) : 
            null}
        </>) : 
        (<>
        <button className="botones" onClick={() => setConfirmaCompra(false)}>Modificar compra</button>
        <Link to={"/carritocompras"}><button className="botones">Ir al carrito</button></Link>
        </>)}
        <Link to={"/"}><button className="botonInicio">Seguir comprando</button></Link>
    </div>
    )
}

export default ItemDetail;