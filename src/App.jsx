import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import NavBar from "../src/components/navbar/NavBar.jsx";
import ItemListContainer from "../src/components/itemlistcontainer/ItemListContainer.jsx";
import ItemDetailContainer from "../src/components/item/ItemDetailContainer";
import Cart from "./components/cartwidget/Cart.jsx";
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
              <ItemDetailContainer />
            </Route>
            <Route path="/cart/:cart">
              <Cart />
            </Route>
          </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );

}

export default App;
