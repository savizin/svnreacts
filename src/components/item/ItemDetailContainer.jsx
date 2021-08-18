import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { database } from '../../firebase/firebase.jsx';
import swal from 'sweetalert';
import ItemDetail from "../item/ItemDetail.jsx";
import Spiner from '../spiner/Spiner.jsx';

const ItemDetailContainer = (props) => {
    
    const [displayObra, setDisplayObra] = useState({});

    const {id} = useParams();

    const getObrasDetail = () => {
        const obraDetalle = database
        .collection("obras")
        .doc (id)
      
        obraDetalle.get().then ((doc) => {
            if (doc.exists) {
                setDisplayObra ({...doc.data(), id: doc.id})
            } else {
                swal({title: "ERROR EN LA CONSULTA"})
            }
        });
    };

    useEffect(() => {
        getObrasDetail();
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

