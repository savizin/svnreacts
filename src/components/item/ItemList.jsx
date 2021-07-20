import React, { useEffect, useState } from 'react'; 
import Item from "../item/Item.jsx";
import obras from "../obras/obras.json";
import {useParams} from "react-router";

const ItemList = (props) => {  
    
    const [displayItems, setDisplayItems] = useState ([]);

    const {categoria} = useParams ();   

    const getItems = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (categoria) {
                    let filtrarObras = obras.filter ((string) => string.categoria === categoria);
                    resolve (filtrarObras);
                }
                else {
                    resolve (obras);
                } 
                reject ("Error en la consulta");
            }, 2000);
        });
    };

    useEffect(() => {
        setDisplayItems ([]);
        getItems().then((res) => setDisplayItems(res));
      }, [categoria]);
   
    return (
        <>
        {displayItems.map((item) => (
            <Item key={item.id} item={item}/>
            ))
        }
        </>
    );
}

export default ItemList;

