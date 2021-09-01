import React from "react";

export default function ItemDetail(item) {
    const { productos } = item;
    return (
        <div key={productos.id} className="gridItem">
            <img className="productosImagen" src={productos.pictureUrl} alt={productos.title} />
            <p>{productos.title}</p>
            <p>{productos.price} PEN</p>
        </div>
    );
}
