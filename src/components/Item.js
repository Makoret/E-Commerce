import React from "react";

export default function Item(item) {
    const { productos } = item;
    console.log(productos);
    return (
        <div>
            <img className="productosImagen" src={productos.pictureUrl} alt={productos.title} />
            <p>{productos.title}</p>
            <p>{productos.price} PEN</p>
        </div>
    );
}
