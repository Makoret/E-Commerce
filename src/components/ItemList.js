import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemList(params) {
    const { productos } = params;

    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        fetch(productos)
            .then((response) => response.json())
            .then((data) => {
                const aux = data.filter((element) => element.id);
                setDataToShow(aux);
            });
    }, []);
    return dataToShow.length === 0 ? (
        <h1 className="textoDeCarga">Cargando...</h1>
    ) : (
        <div className="gridContainer">
            {dataToShow.map((element) => (
                <ItemDetail productos={element} />
            ))}
        </div>
    );
}
