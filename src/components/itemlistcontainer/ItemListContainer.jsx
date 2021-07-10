import React from "react";
import "../itemlistcontainer/ItemListContainer.css";
import ItemCount from "../itemcount/ItemCount.jsx";
import ItemList from "../item/ItemList.jsx";

const Container = (props) => {
    return (
    <>
        <p className="leyenda">{props.leyenda}</p>
        <div className="contador">
            <ItemCount inicial={0} stock={3}/>       
        </div>
        <div className="obras">
            <ItemList/>
        </div>
    </>
    );
}

export default Container;
