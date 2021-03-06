import React, { useEffect, useState} from 'react'; 
import { useParams } from 'react-router-dom';
import {database} from "../../firebase/firebase.jsx";
import Item from "../item/Item.jsx";
import Spiner from "../spiner/Spiner.jsx";

const ItemList = () => {  
    
    const [displayObras, setdisplayObras] = useState([]);

    const {categoria} = useParams(); 

    const obrasDisponibles = () => {

        //Utilización de firebase
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
        setdisplayObras([]);
        obrasDisponibles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categoria]);
   
    return (
    <>
        {displayObras.length ? 
        (displayObras.map((obra) => (<Item key={obra.id} obra={obra}/>))) : 
        (<Spiner />)
        }
    </>
    );
}

export default ItemList;

