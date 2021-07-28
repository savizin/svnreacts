import "../itemcount/itemCount.css";
import React, {useState} from "react";

const ItemCount = () => {

  const [contador, setContador] = useState(0);   

  const sumar = () => {
    contador < 3 && setContador (contador + 1)
  }
  
  const restar = () => {
    contador > 1 && setContador (contador - 1);
  }


  return(
    <>
      <div className="contador">
        <button className="contador__boton" onClick={restar}>-</button>
        <span className="contador__num">{contador}</span>
        <button className="contador__boton" onClick={sumar}>+</button>
      </div>
    </>
  )

}

export default ItemCount;