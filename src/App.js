import "./style/reset.css";
import "./style/App.css";
import NavBar from "./components/navBar";

import ItemListContainer from "./components/ItemListContainer.js";

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer />
        </div>
    );
}

export default App;
