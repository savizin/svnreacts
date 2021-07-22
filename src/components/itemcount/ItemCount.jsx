import "../itemcount/itemCount.css";
import React, { useState } from 'react'; 

const ItemCount = ({inicial, stock, agregarProducto}) => {

  const [contador, setContador] = useState(0);   

  const sumar = () => {
    if (contador === stock) {
      return;
    }
    else {
      setContador (contador + 1);
    }
  }

  const restar = () => {
    if (contador === inicial) {
      return;
    }
    else {
    setContador (contador - 1);
    }
  }

  return(
    <>
      <div className="contador">
        <button className="contador__boton" onClick={restar}>-</button>
        <span className="contador__num">{contador}</span>
        <button className="contador__boton" onClick={sumar}>+</button>
      </div>
      <button className="contador__boton2" onClick={agregarProducto}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount;