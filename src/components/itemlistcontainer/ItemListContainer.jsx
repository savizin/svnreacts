import React from "react";
import "../itemlistcontainer/ItemListContainer.css";
import ItemCount from "../itemcount/ItemCount.jsx";
import ItemList from "../item/ItemList.jsx";

const Container = (props) => {
    return (
    <>
        <p className="leyenda">{props.leyenda}</p>
        <div className="contador">
            <ItemCount/>       
        </div>
        <ItemList/>
    </>
    );
}

export default Container;
