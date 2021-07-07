import "./App.css";
import NavBar from "../src/components/navbar/NavBar.jsx";
import ItemListContainer from "../src/components/itemlistcontainer/ItemListContainer.jsx";
import ItemCount from "../src/components/itemcount/ItemCount.jsx";
import React, {useState} from 'react';

function App() {

const [menos, setMenos] = useState (0);
const [mas, setMas] = useState (3);

const agregarProductos = () => {
  setMenos (menos - 1);
  setMas (mas + 1);
}

  return (
    <div className="aplicacion">
      <NavBar />
      <ItemListContainer leyenda="Obras de arte disponible para su compra"/>
      <div>
        <Agregar agregarProductos = {agregarProductos}/>       
        <p>{menos}</p>
        <p>{mas}</p>
      </div>
      <div className="seccion">
        <h1 className="seccion__titulo">SVN</h1>
        <h2 className="seccion__subtitulo">ARTE EN COLORES</h2>
      </div>
    </div>
  );
}

export default App;
