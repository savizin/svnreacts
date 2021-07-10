import "./App.css";
import NavBar from "../src/components/navbar/NavBar.jsx";
import ItemListContainer from "../src/components/itemlistcontainer/ItemListContainer.jsx";

function App() {
  return (
    <div className="aplicacion">
      <NavBar />
      <header className="seccion">
        <h1 className="seccion__titulo">SVN</h1>
        <h2 className="seccion__subtitulo">ARTE EN COLORES</h2>
      </header>
      <ItemListContainer leyenda="Obras de arte disponible para su compra"/>
    </div>
  );
}

export default App;
