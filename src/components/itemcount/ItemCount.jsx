import React from 'react';
import "../itemcount/ItemCount.css";

const Agregar = ({resta, suma}) => {
      return (
        <>
          <div className="botonMenos" onClick={resta}>-</div>
          <div className="botonMas" onClick={suma}>+</div>
        </>
      );
} 

export default Agregar;