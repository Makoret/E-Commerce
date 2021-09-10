import React from "react";
import Item from "./Item";
import { Fragment } from "react";

export default function ItemList(params) {
    const { productos } = params;

    return productos.length === 0 ? (
        <h1 className="textoDeCarga">Cargando...</h1>
    ) : (
        <div className="gridContainer">
            {productos.map((element) => (
                <Fragment key={element.id}>
                    <Item productos={element} />
                </Fragment>
            ))}
        </div>
    );
}
