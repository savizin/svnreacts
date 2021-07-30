import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../cart/cart.css";
import ItemCart from "./ItemCart";

function Cart (props) {

    const {carrito} = useContext (CartContext);

    return (
        <div className="cart">
            <div className="cart__obras">
                {(!carrito.length) ?         
                (<div className="cart__sinobras">
                    <p className="cart__mensaje">No se han añadido productos al carrito</p>
                    <button className="cart__botoninicio"><Link to={"/"}>Seguir comprando</Link></button>
                </div>) : 
                (carrito.map((itemDetail) => (<ItemCart key={itemDetail.id} itemDetail={itemDetail}/>)))}
            </div>
        </div>
    );
   

}

export default Cart;