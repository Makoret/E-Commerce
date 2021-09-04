import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const promiseDelay = () => {
    const E_COMMERCE_API = "https://mocki.io/v1/1047080a-dab8-46c7-b3d1-66f84645bd60";
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(fetch(E_COMMERCE_API)), 1000);
    });
};

export default function ItemDetailContainer() {
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        promiseDelay()
            .then((response) => response.json())
            .then((data) => {
                const aux = data.find((element) => {
                    console.log(element);
                    return element.id === 2;
                });
                setDataToShow(aux);
            });
    }, []);

    return dataToShow.length === 0 ? (
        <h1 className="textoDeCarga">Cargando...</h1>
    ) : (
        <div className="main">
            <ItemDetail item={dataToShow} />
        </div>
    );
}
