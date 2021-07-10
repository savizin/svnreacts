import React, { useState } from 'react'; 
import Item from "../item/Item.jsx";

const Productos = () => {
    const [displayItems, setDisplayItems] = useState ([]);

    const getItems = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (Item);
                reject ("Error en la consulta");
            }, 2000);
        });
    };

    getItems().then((result) => setDisplayItems (result));
    return <obras displayItems = {displayItems}/>;
}

export default Productos;

