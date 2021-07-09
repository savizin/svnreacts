import React from "react";
import "../itemlistcontainer/ItemListContainer.css";
import ItemCount from "../itemcount/ItemCount.jsx";

const Container = (props) => {
    return (
    <>
        <p className="leyenda">{props.leyenda}</p>
        <div className="contador">
            <ItemCount/>       
        </div>
    </>
    );
}

export default Container;