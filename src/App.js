import "./style/reset.css";
import "./style/App.css";
import NavBar from "./components/navBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Cart from "./components/Cart.js";
import CustomProvider from "./context/cartContext.js";

function App() {
    return (
        <BrowserRouter>
            <CustomProvider>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path="/categoria/:categoriaId" component={ItemListContainer} />
                    <Route path="/item/:itemId" component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </CustomProvider>
        </BrowserRouter>
    );
}

export default App;
