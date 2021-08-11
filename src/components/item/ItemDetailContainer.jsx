import React, { useEffect, useState } from 'react'; 
import ItemDetail from "../item/ItemDetail.jsx";
import { database } from '../../firebase/firebase.jsx';
import Spiner from '../spiner/Spiner.jsx';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (props) => {
    
    const [displayObra, setDisplayObra] = useState ({});

    const {id} = useParams();

    const getObrasDetail = () => {
        const obraDetalle = database
        .collection("obras")
        .doc (id)
      
        obraDetalle.get().then ((doc) => {
            if (doc.exists) {
                setDisplayObra ({...doc.data(), id: doc.id})
            } else {
                alert ("Error en la consulta");
            }
        });
    };

    useEffect(() => {
        getObrasDetail()
    }, [id]);

    return (
        <>
        {(Object.entries(displayObra).length !== 0) ? 
        (<ItemDetail itemDetail={displayObra}/>) : 
        (<Spiner/>)}
        </> 
    );

}

export default ItemDetailContainer;

