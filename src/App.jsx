import "./App.css";
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "../src/components/footer/Footer.jsx"
import NavBar from "../src/components/navbar/NavBar.jsx";
import ItemListContainer from "../src/components/itemlistcontainer/ItemListContainer.jsx";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
   
      <NavBar/>
      <Header/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer leyenda="Obras de arte disponible para su compra"/>
          </Route> 
          <Route path="/categoria/:categoria">
            <ItemListContainer leyenda="Obras de arte disponible para su compra"/>
          </Route>
          <Route path="/detalleobra/:id">
      
          </Route>
        </Switch>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
