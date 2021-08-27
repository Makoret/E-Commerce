import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function ItemList(params) {
    const { productos } = params;
    console.log(productos);

    const promesa = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(productos), 2000);
        });
    };
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        promesa().then((data) => {
            let aux = data.filter((productos) => productos.title);
            console.log(aux);
            setDataToShow(aux);
        });
    }, []);
    // console.log("test");
    return dataToShow.length === 0 ? (
        <h1>Cargando...</h1>
    ) : (
        <div className="gridContainer">
            {dataToShow.map((element) => (
                <Item productos={element} />
            ))}
        </div>
    );
}
