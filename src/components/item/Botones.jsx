import React from "react";
import "../item/itemDetail.css";
import { Link } from "react-router-dom";

function Botones () {

    return (
        <div className="botones">
            <button className="botonInicio"><Link to={"/"}>Seguir comprando</Link></button>
            <button className="botonFinalizar"><Link to={"/cart/cart"}>Finalizar compra</Link></button>
        </div>
    )

}

export default Botones;