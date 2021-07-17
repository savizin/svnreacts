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
                    let filtroObras =   (obras.filter ((string) => string.categoria === categoria));
                    resolve (filtroObras);
                }
                else {
                    resolve (obras);
                } 
                reject ("Error en la consulta");
            }, 1000);
        });
    };

    useEffect(() => {
        getItems().then(res => setDisplayItems(res))
      }, []);
   
    return (
        <>
        {displayItems.map((item) => <Item item={item}/>)}
        </>
    );
}

export default ItemList;

