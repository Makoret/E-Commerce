import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/cartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
    const [cantidadCompra, setCantidadCompra] = useState(0);

    const { addItem } = useContext(contexto);

    const onAdd = (cantidad) => {
        const nuevoProducto = { ...item, cantidad };
        addItem(nuevoProducto);
        setCantidadCompra(cantidad);
    };

    useEffect(() => {
        return () => {};
    }, [cantidadCompra]);

    return (
        <div key={item.id} className="itemDetail">
            <img className="itemImagen" src={item.pictureUrl} alt={item.title} />
            <div className="data">
                <p>{item.title}</p>
                <p>{item.price} PEN</p>
                {cantidadCompra === 0 ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to={`/Cart`}>
                        <button>Terminar mi compra</button>
                    </Link>
                )}
            </div>
        </div>
    );
}
