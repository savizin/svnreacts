import React, { useEffect, useState } from 'react'; 
import Item from "../item/Item.jsx";
import ArrayObras from "../item/ArrayObras.jsx";

const ItemList = (props) => {
    const [displayItems, setDisplayItems] = useState ([]);

    const getItems = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (ArrayObras);
                reject ("Error en la consulta");
            }, 2000);
        });
    };

    useEffect(() => {
        getItems().then(res => setDisplayItems(res))
      }, []);
   
    return (
        <>
        {displayItems.length > 0 &&
        displayItems.map((item) => <Item item={item} />)}
        </>
    );
}

export default ItemList;

