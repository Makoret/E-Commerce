import { React } from "react";
import ItemCount from "./ItemCount";

export default function itemListContainer(params) {
    return (
        <div className="main">
            <Welcome Text="Lista de productos" />
            <div className="gridContainer">
                <ItemCount stock={5} initial={1} onAdd={(cantidad) => console.log(cantidad)} />
            </div>
        </div>
    );
}
function Welcome(props) {
    return <h1>{props.Text}</h1>;
}

const element = <itemListContainer Text="Lista de productos" />;
