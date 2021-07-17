import "../itemcount/itemCount.css";
import React, { useState } from 'react'; 

const ItemCount = ({inicial, stock}) => {
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
      <button className="contador__boton" onClick={restar}>-</button>
      <span className="contador__num">{contador}</span>
      <button className="contador__boton" onClick={sumar}>+</button>
    </>
  )
}

export default ItemCount;