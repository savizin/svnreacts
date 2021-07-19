import React, { useEffect, useState } from 'react'; 
import Item from "../item/Item.jsx";
import obras from "../obras/obras.json";
import {useParams} from "react-router";

const ItemList = (props) => {  
    
    const {categoria} = useParams ();   

    const [displayItems, setDisplayItems] = useState ([]);

    const getItems = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (categoria) {
                    resolve = obras.filter ((string) => string.categoria === categoria);
                }
                else {
                    resolve (obras);
                } 
                reject ("Error en la consulta");
            }, 2000);
        });
    };

    useEffect(() => {
        getItems().then(res => setDisplayItems(res))
      }, [categoria]);
   
    return (
        <>
        {displayItems.map((item) => <Item item={item}/>)}
        </>
    );
}

export default ItemList;

