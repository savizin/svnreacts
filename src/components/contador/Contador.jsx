import React from "react";
import "../contador/contador.css";

function Contador ({contador, setContador, inicial, stock}) {

    const sumar = () => {
        if (contador < stock) {
            setContador (contador + 1)
        }; 
    }
    
    const restar = () => {
        if (contador > inicial) {
            setContador (contador - 1)
        }; 
    }

    return (
        <div className="contador">
            <button className="contadorBoton" onClick={restar}>-</button>
            <span className="contadorNum">{contador}</span>
            <button className="contadorBoton" onClick={sumar}>+</button>
        </div>
    )
}

export default Contador;
   
   
   