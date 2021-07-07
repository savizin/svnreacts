import React from "react";
import "../itemlistcontainer/ItemListContainer.css";

const Container = (props) => {
    return (
        <p className="leyenda">{props.leyenda}</p>
    );
}

export default Container;