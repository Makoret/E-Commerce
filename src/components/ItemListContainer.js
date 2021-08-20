import { React } from "react";

export default function itemListContainer(params) {
    return (
        <div className="main">
            <Welcome Text="Lista de productos" />
        </div>
    );
}
function Welcome(props) {
    return <h1>{props.Text}</h1>;
}

const element = <itemListContainer Text="Lista de productos" />;
