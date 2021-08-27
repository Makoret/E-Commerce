import "./style/reset.css";
import "./style/App.css";
import NavBar from "./components/navBar";
import Data from "./components/Data";

import ItemListContainer from "./components/ItemListContainer.js";

function App() {
    const { productos } = Data;
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer productos={productos} />
        </div>
    );
}

export default App;
