import React, {createContext, useState} from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState ([]);

    const agregarAlCarrito = (itemDetail, id) => {
        setCarrito ([...carrito, itemDetail])        
    }

    const eliminarDelCarrito = (id) => {
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
        {{carrito, agregarAlCarrito, eliminarDelCarrito, totalCarrito, cantidadCarrito}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider; 