import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
    const [cantidadCompra, setCantidadCompra] = useState(0);

    useEffect(() => {
        console.log(cantidadCompra);
        return () => {};
    }, [cantidadCompra]);

    return (
        <div key={item.id} className="itemDetail">
            <img className="itemImagen" src={item.pictureUrl} alt={item.title} />
            <div className="data">
                <p>{item.title}</p>
                <p>{item.price} PEN</p>
                {cantidadCompra === 0 ? (
                    <ItemCount
                        stock={item.stock}
                        initial={1}
                        onAdd={(cantidad) => {
                            setCantidadCompra(cantidad);
                        }}
                    />
                ) : (
                    <Link to={`/Cart`}>
                        <button>Terminar mi compra</button>
                    </Link>
                )}
            </div>
        </div>
    );
}
