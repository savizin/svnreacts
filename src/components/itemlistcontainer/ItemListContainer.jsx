import React from "react";
import ItemList from "../item/ItemList.jsx";
import "../../../src/components/itemlistcontainer/itemListContainer.css";

const Container = (props) => {

    return (
    <div className="itemList">
        <p className="leyenda">{props.leyenda}</p>
        <div className="obras">
            <ItemList/>
        </div>
    </div>
    );

}

export default Container;
