import React, { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
    let [contador, setContador] = useState(initial);

    const aumentar = () => {
        if (contador < stock) {
            setContador(parseInt(contador) + 1);
            console.log(contador);
        }
    };
    const disminuir = () => {
        if (contador > 1) {
            setContador(parseInt(contador) - 1);
            console.log(contador);
        }
    };

    const agregar = () => {
        if (stock > 1) {
            onAdd(contador);
        }
    };

    return (
        <div className="gridItem">
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
