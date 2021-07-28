import React from "react";
import "../item/itemDetail.css";
import { Link } from "react-router-dom";

function Botones () {

    return (
        <div>
            <button className="botonFinalizar"><Link to={"/cart/cart"}>Finalizar compra</Link></button>
        </div>
    )

}

export default Botones;