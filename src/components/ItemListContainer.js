import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

export default function ItemListContainer() {
    const categoriaId = useParams();
    const E_COMMERCE_API = "https://mocki.io/v1/1877bd17-9d63-41f4-8f17-a01f6bf6ebe9";

    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        fetch(E_COMMERCE_API)
            .then((response) => response.json())
            .then((data) => {
                const aux = data.filter((element) =>
                    categoriaId.categoriaId ? element.categoria === categoriaId.categoriaId : element.categoria
                );
                setDataToShow(aux);
            });
    }, [categoriaId]);

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
