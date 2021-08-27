import React, { useEffect, useState } from "react";

const promesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () =>
                resolve([
                    { id: 29, destacado: true, nombre: "mango" },
                    { id: 30, destacado: true, nombre: "platano" },
                    { id: 41, destacado: true, nombre: "manzana" },
                    { id: 52, destacado: false, nombre: "mandarina" },
                    { id: 23, destacado: true, nombre: "naranja" },
                ]),
            1000
        );
    });
};

export default function ItemList() {
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        promesa().then((data) => {
            let aux = data.filter((producto) => producto.destacado);
            setDataToShow(aux);
        });
    }, []);
    // console.log("test");
    return dataToShow.length === 0 ? (
        <h1>Cargando...</h1>
    ) : (
        <ul>
            {dataToShow.map((element) => (
                <li key={element.id}>{element.nombre}</li>
            ))}
        </ul>
    );
}
