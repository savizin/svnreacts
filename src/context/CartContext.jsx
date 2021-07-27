import React, {createContext, useState} from "react";
import ItemDetail from "../components/item/ItemDetail";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState ([ItemDetail]);

    const agregarAlCarrito = (itemDetail) => {
        setCarrito ([...carrito, itemDetail.id]);
    }

    const eliminarProducto = (id) => {
        setCarrito (carrito.filter (prod => prod.id !== id))
    }

    const totalCarrito = () => {
        return carrito.reduce ( (acc, prod) => acc + (prod.precio * prod.cantidad), 0 )
    }

    const cantidadCarrito = () => {
        return carrito.reduce ( (acc, prod) => acc + prod.cantidad, 0 )
    }

    return (
        <CartContext.Provider value= 
        {{carrito, agregarAlCarrito, totalCarrito, cantidadCarrito, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider; 