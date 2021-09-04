import React from "react";
import Item from "./Item";

export default function ItemList(params) {
    const { productos } = params;

    return productos.length === 0 ? (
        <h1 className="textoDeCarga">Cargando...</h1>
    ) : (
        <div className="gridContainer">
            {productos.map((element) => (
                <Item productos={element} />
            ))}
        </div>
    );
}
