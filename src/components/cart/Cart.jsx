import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart.jsx";
import "../../components/cart/cart.css";

function Cart (props) {

    const {carrito, cantidadCarrito, totalCarrito} = useContext (CartContext);

    return (
        <div className="cart">
            <div className="cartObras">
                {(!carrito.length) ?         
                (<div className="cartSinObras">
                    <p className="cartMensaje">No se han añadido productos al carrito</p>
                    <Link to={"/"}>
                        <button className="cartBotonInicio">Seguir comprando</button>
                    </Link>
                 </div>) : 
                (<>
                    <p className="cartTitulo">RESUMEN DE TU COMPRA:</p>
                    {carrito.map((itemDetail) => <ItemCart key={itemDetail.id} itemDetail={itemDetail}/>)}
                    <div className="cartTotales">
                        <p className="info">Cantidad: {cantidadCarrito()}</p>
                        <p className="info">Total: ${totalCarrito()}</p>
                    </div>
                    <Link to={"/formulario"}>
                        <button className="cartBotonComprar">FINALIZAR COMPRA </button>
                    </Link>
                </>)                 
                }
            </div>
        </div>
    );
   
}

export default Cart;