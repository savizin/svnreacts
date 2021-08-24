import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { database } from '../../firebase/firebase.jsx';
import ItemDetail from "../item/ItemDetail.jsx";
import swal from 'sweetalert';
import Spiner from '../spiner/Spiner.jsx';
import "../item/itemDetail.css";

const ItemDetailContainer = (props) => {
    
    const [displayObra, setDisplayObra] = useState({});

    const {id} = useParams();

    //Utilización de firebase
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
    <>
        {(Object.entries(displayObra).length !== 0) ? 
        (<ItemDetail itemDetail={displayObra}/>) : 
        (<div className="spiner"><Spiner/></div>)}
    </> 
    );

}

export default ItemDetailContainer;

