import React, {createContext, useState} from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState ([]);

    const agregarAlCarrito = (itemDetail) => {         
        setCarrito ([...carrito, itemDetail])
    }

    const verificarCarrito = (id) => {
        const verificar = carrito.filter ((itemDetail) => itemDetail.id === id);
        return verificar.length > 0;
      };
    
    const editarCarrito = (itemEditado) => {
        const editar = carrito.map((itemDetail) =>
          itemDetail.id === itemEditado.id ? itemEditado : itemDetail
        );
        setCarrito (editar);
      };

    const eliminarDelCarrito = (id) => {
        setCarrito (carrito.filter (prod => prod.id !== id))
    }

    const totalPrecio = (itemDetail) => {
        return itemDetail.reduce (((acc, prod) => acc + (prod.precio * prod.cantidad), 0 ))
    }

    const totalCarrito = () => {
        return carrito.reduce ( (acc, prod) => acc + (prod.precio * prod.cantidad), 0 )
    }

    const cantidadCarrito = () => {
        return carrito.reduce ( (acc, prod) => acc + prod.cantidad, 0 )
    }

    const limpiarCarrito = () => {
        return carrito.clear();
    }


    return (
        <CartContext.Provider value= 
        {{carrito, agregarAlCarrito, eliminarDelCarrito, totalCarrito, cantidadCarrito, totalPrecio, verificarCarrito, editarCarrito, limpiarCarrito}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider; 