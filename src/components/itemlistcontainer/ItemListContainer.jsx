import React from "react";
import "../itemlistcontainer/ItemListContainer.css";
import ItemDetailContainer from "../item/ItemDetailContainer.jsx";

const Container = (props) => {
    return (
    <>
    <div className="ItemListContainer">
        <p className="leyenda">{props.leyenda}</p>
        <div className="obras">
        </div>
        <div className="obrasDetail">
            <ItemDetailContainer/>
        </div>
    </div>
    </>
    );
}

export default Container;
