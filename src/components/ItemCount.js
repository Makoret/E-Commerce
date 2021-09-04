import React, { useState, useEffect } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
    let [contador, setContador] = useState(initial);

    const aumentar = () => {
        if (contador < stock) {
            setContador(parseInt(contador) + 1);
        }
    };
    const disminuir = () => {
        if (contador > 1) {
            setContador(parseInt(contador) - 1);
        }
    };

    const agregar = () => {
        if (stock > 1) {
            onAdd(contador);
        }
    };
    useEffect(() => {
        console.log(contador);
        return () => {};
    });

    return (
        <div className="contador">
            <div>Stock: {stock}</div>
            <div className="selector">
                <button onClick={aumentar}>+</button>
                <p className="monto">{contador}</p>
                <button onClick={disminuir}>-</button>
            </div>
            <button disabled={stock > 0 ? false : true} onClick={agregar}>
                Agregar al carrito
            </button>
        </div>
    );
}
