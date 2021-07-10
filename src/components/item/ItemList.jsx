import React, { useEffect, useState } from 'react'; 
import Item from "../item/Item.jsx";
import Obras from "../item/ArrayObras.jsx";

const ItemList = (props) => {
    const [displayItems, setDisplayItems] = useState ([]);

    const getItems = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (Obras);
                reject ("Error en la consulta");
            }, 2000);
        });
    };

    useEffect(() => {
        getItems().then(res => setDisplayItems(res))
      }, []);
   
    return (
        <>
        {displayItems.map((item) => <Item item={item} />)}
        </>
    );
}

export default ItemList;

