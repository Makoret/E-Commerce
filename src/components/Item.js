import React from "react";
import { Link } from "react-router-dom";

export default function Item(item) {
    const { productos } = item;
    return (
        <Link to={`/item/${productos.id}`} key={productos.id} className="gridItem">
            <img className="productosImagen" src={productos.pictureUrl} alt={productos.title} />
            <p>{productos.title}</p>
            <p>{productos.price} PEN</p>
        </Link>
    );
}
