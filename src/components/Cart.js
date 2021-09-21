import React, { Fragment, useContext, useEffect, useState } from "react";
import { contexto } from "../context/cartContext";
import CartElement from "./CartElement";
import { Link } from "react-router-dom";

export default function Cart() {
    const { removeItem, carrito } = useContext(contexto);
    const [total, setTotal] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    let newTotal = 0
    let newTotalItems = 0

    const del = (element) => {
        console.log(`DENTRO DE CART => ${element.title}`);
        // removeItem(element);
    };

    useEffect(() => {
        carrito.map((element) => { return setTotal((newTotal += (element.price).toFixed(2) * (element.cantidad).toFixed(2)).toFixed(2)) })
        carrito.map((element) => { return setTotalItems((newTotalItems += (element.cantidad))) })
    }, [carrito, removeItem])

    return carrito.length > 0 ? (
        <div className="cartReceipt">
            {carrito.map((element) => (
                <Fragment key={element.id}>
                    <CartElement producto={element} del={del} />
                </Fragment>
            ))}
            <div className="cartCost">Total: {total}</div>
            <div className="cartCost">Cantidad de items: {totalItems}</div>
        </div>
    ) : (
        <div className="textoDeCarga">
            <div >No agregaste productos!</div>
            <Link to={`/`} >volver al inicio</Link>
        </div>
    )
}
