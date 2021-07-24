import React, {createContext, useState} from "react";
import ItemDetail from "../components/item/ItemDetail";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState ([ItemDetail]);

    const agregarAlCarrito = (item) => {
        setCarrito ([...carrito, item]);
    }

    return (
        <CartContext.Provider value= {{carrito, agregarAlCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider; 