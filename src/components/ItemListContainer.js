import { React } from "react";
import ItemList from "./ItemList";

export default function itemListContainer(params) {
    const { productos } = params;
    console.log(productos);
    return (
        <div className="main">
            <Welcome Text="Lista de productos" />
            <ItemList productos={productos} />
        </div>
    );
}
function Welcome(props) {
    return <h1>{props.Text}</h1>;
}
