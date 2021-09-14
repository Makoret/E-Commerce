import "./style/reset.css";
import "./style/App.css";
import NavBar from "./components/navBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Cart from "./components/Cart.js";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path="/ItemListContainer/:categoriaId" component={ItemListContainer} />
                    <Route path="/ItemDetailContainer/:itemId" component={ItemDetailContainer} />
                    <Route path="/Cart" component={Cart} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
