import React, { useEffect, useState } from 'react'; 
import ItemDetail from "../item/ItemDetail.jsx";
import Obras from "../item/ArrayObras.jsx";

const ItemDetailContainer = (props) => {
    const [displayItems, setDisplayItems] = useState ([]);

    const getItemsDetail = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (Obras.filter((el) => el.id === 8));
                reject ("Error en la consulta");
            }, 2000);
        });       
    }

    useEffect(() => {
        getItemsDetail().then(result => setDisplayItems(result))
      }, []);

    return (
        <>
        {displayItems.map (itemDetail => <ItemDetail itemDetail={itemDetail}/>)}
        </>
    );
}

export default ItemDetailContainer;