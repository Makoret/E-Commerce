import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
    return (
        <div key={item.id} className="itemDetail">
            <img className="itemImagen" src={item.pictureUrl} alt={item.title} />
            <div className="data">
                <p>{item.title}</p>
                <p>{item.price} PEN</p>
                <ItemCount stock={item.stock} initial={1} onAdd={(cantidad) => console.log(cantidad)} />
            </div>
        </div>
    );
}
