import React, { useEffect, useState} from 'react'; 
import Item from "../item/Item.jsx";
import {database} from "../../firebase/firebase.jsx";
import Spiner from "../spiner/Spiner.jsx";
import { useParams } from 'react-router-dom';

const ItemList = () => {  
    
    const [displayObras, setdisplayObras] = useState ([]);

    const {categoria} = useParams (); 

    const obrasDisponibles = () => {

        const obras = database.collection ("obras") 
              
        if (categoria) {
          obras
          .where ("categoria", "==", `${categoria}`)
          .get().then ((query) => 
            setdisplayObras (
              query.docs.map((doc) => {
                return {...doc.data(), categoria: doc.categoria, id: doc.id};
              })
            ));
        }
        else {
          obras
          .get().then ((query) => 
            setdisplayObras (
              query.docs.map((doc) => {
                return {...doc.data(), id: doc.id};
              })
            ));
        }
    };

    useEffect(() => {
        setdisplayObras ([]);
        obrasDisponibles () 
    },[categoria]);
   
    return (
        <>
        {displayObras.length ? 
        (displayObras.map((obra) => (<Item key={obra.id} obra={obra}/>))) : (<Spiner />)
        }
        </>
    );
}

export default ItemList;

