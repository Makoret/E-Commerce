import React, { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
    const aumentar = () => {
        if (initial > stock) {
            initial++;
            console.log(initial);
        }
    };
    const disminuir = () => {
        if (initial < 0) {
            initial--;
            console.log(initial);
        }
    };

    return (
        <div className="gridItem">
            <div>Stock: {stock}</div>
            <div>
                <button onClick={aumentar}>+</button>
                <input className="monto" value={initial}></input>
                <button onClick={disminuir}>-</button>
            </div>
            <button>Agregar</button>
        </div>
    );
}
