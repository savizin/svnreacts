import React from "react";
import "../itemlistcontainer/itemListContainer.css";
import ItemList from "../item/ItemList.jsx";

const Container = (props) => {

    return (
    <div className="ItemListContainer">
        <p className="leyenda">{props.leyenda}</p>
        <div className="obras">
            <ItemList/>
        </div>
    </div>
    );
}

export default Container;
