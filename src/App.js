import "./style/reset.css";
import "./style/App.css";
import NavBar from "./components/navBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path="/ItemListContainer/:categoriaId" component={ItemListContainer} />
                    <Route path="/ItemDetailContainer/:itemId" component={ItemDetailContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
