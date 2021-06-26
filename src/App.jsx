import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  return (
    <div className="aplicacion">
      <NavBar />
      <ItemListContainer leyenda="Obras de arte disponible para su compra"/>
      <div className="seccion">
        <h1 className="seccion__titulo">SVN</h1>
        <h2 className="seccion__subtitulo">ARTE EN COLORES</h2>
      </div>
    </div>
  );
}

export default App;
