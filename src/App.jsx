import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import NavBar from "../src/components/navbar/NavBar.jsx";
import ItemListContainer from "../src/components/itemlistcontainer/ItemListContainer.jsx";
import ItemDetailContainer from "../src/components/item/ItemDetailContainer";
import CartContextProvider from "./context/CartContext.jsx";
import Cart from "./components/cart/Cart.jsx";
import Formulario from "./components/formulario/Formulario.jsx";
import Orden from "./components/ordencompra/Orden.jsx";

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Header/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer leyenda="Obras de arte disponibles para su compra"/>
            </Route> 
            <Route path="/categoria/:categoria">
              <ItemListContainer leyenda="Obras de arte disponibles para su compra"/>
            </Route>
            <Route path="/detalleobra/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/carritocompras">
              <Cart />
            </Route>
            <Route path="/formulario">
              <Formulario />
            </Route>
            <Route path="/ordencompra/:idOrden">
              <Orden />
            </Route>
          </Switch> 
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );

}

export default App;
