import { React } from "react";
import ItemList from "./ItemList";

export default function itemListContainer(params) {
    const { productos } = params;
    console.log(productos);
    return (
        <div className="main">
            <Welcome Text="Lista de productos" />
            <div className="gridContainer">
                <ItemList productos={productos} />
            </div>
        </div>
    );
}
function Welcome(props) {
    return <h1>{props.Text}</h1>;
}
