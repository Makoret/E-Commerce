import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
    const E_COMMERCE_API = "https://mocki.io/v1/1047080a-dab8-46c7-b3d1-66f84645bd60";

    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        fetch(E_COMMERCE_API)
            .then((response) => response.json())
            .then((data) => {
                const aux = data.filter((element) => element.id);
                setDataToShow(aux);
            });
    }, []);

    return (
        <div className="main">
            <Welcome Text="Lista de productos" />
            <ItemList productos={dataToShow} />
        </div>
    );
}
function Welcome(props) {
    return <h1>{props.Text}</h1>;
}
