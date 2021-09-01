import { React } from "react";
import ItemList from "./ItemList";

export default function itemListContainer() {
    const E_COMMERCE_API = "https://mocki.io/v1/1047080a-dab8-46c7-b3d1-66f84645bd60";
    return (
        <div className="main">
            <Welcome Text="Lista de productos" />
            <ItemList productos={E_COMMERCE_API} />
        </div>
    );
}
function Welcome(props) {
    return <h1>{props.Text}</h1>;
}
