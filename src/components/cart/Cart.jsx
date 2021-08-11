import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../cart/cart.css";
import ItemCart from "./ItemCart";

function Cart (props) {

    const {carrito, cantidadCarrito, totalCarrito} = useContext (CartContext);

    return (
        <div className="cart">
            <div className="cart__obras">
                {(!carrito.length) ?         
                (<div className="cart__sinobras">
                    <p className="cart__mensaje">No se han añadido productos al carrito</p>
                    <button className="cart__botoninicio">
                        <Link to={"/"}>Seguir comprando</Link>
                    </button>
                 </div>) : 
                (<>
                    <p className="cart__titulo">RESUMEN DE TU COMPRA:</p>
                    {carrito.map((itemDetail) => <ItemCart key={itemDetail.id} itemDetail={itemDetail}/>)}
                    <div className="cart__totales">
                        <p className="info">Cantidad: {cantidadCarrito()}</p>
                        <p className="info">Total: ${totalCarrito()}</p>
                    </div>
                    <bottom className="cart__botoncomprar">
                        <Link to={"/formulario/formulario"}>FINALIZAR COMPRA</Link>
                    </bottom>
                </>)                 
                }
            </div>
        </div>
    );
   

}

export default Cart;