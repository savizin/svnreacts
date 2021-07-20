import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import ItemDetail from "../item/ItemDetail.jsx";
import obras from "../obras/obras.json";

const ItemDetailContainer = (props) => {
    
    const {id} = useParams();
    
    const [displayObra, setDisplayObra] = useState ({});

    const getObrasDetail = (id) => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                let filtroDetail = obras.filter((number) => number.id === parseInt(id));
                resolve (filtroDetail[0]);
                reject ("Error en la consulta");
            }, 1000);
        });       
    }

    useEffect(() => {
        getObrasDetail(id).then(res => setDisplayObra(res))
      }, [id]);

    return (
        <>
        {(Object.entries(displayObra).length !== 0) ? 
        (<ItemDetail itemDetail={displayObra} />) : 
        (<h2>Cargando...</h2>)}
        </> 
    );
}

export default ItemDetailContainer;