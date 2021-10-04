import React, { Fragment, useContext, useEffect, useState } from "react";
import { contexto } from "../context/cartContext";
import CartElement from "./CartElement";
import { Link } from "react-router-dom";
import { firestore } from '../firebase/index.js'

export default function Cart() {
    const { removeItem, carrito, clearCart } = useContext(contexto);
    const [total, setTotal] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contacto, setContacto] = useState("")

    const checkout = () => {
        const collection = firestore.collection("ordenes")
        const usuario = { nombre, correo, contacto }
        const orden = { carrito, usuario, date: Date().toLocaleString(), cantidad: totalItems, costo: total }
        const query = collection.add(orden)
        console.log(query);

    }

    const guardarNombre = (e) => setNombre(e.target.value)
    const guardarCorreo = (e) => setCorreo(e.target.value)
    const guardarContacto = (e) => setContacto(e.target.value)

    useEffect(() => {
        let newTotal = 0
        let newTotalItems = 0
        carrito.map((element) => {
            return setTotal(
                (newTotal += (element.price).toFixed(2) * (element.cantidad).toFixed(2)).toFixed(2))
        })
        carrito.map((element) => {
            return setTotalItems(newTotalItems += (element.cantidad))
        })
    }, [carrito, removeItem])

    return <>
        {carrito.length > 0 ? (
            <div>
                <div className="cartReceipt">
                    {carrito.map((element) => (
                        <Fragment key={element.id}>
                            <CartElement producto={element} />
                        </Fragment>
                    ))}
                    <div className="cartCost">Total: {total}</div>
                    <div className="cartCost">Cantidad de items: {totalItems}</div>
                    <button onClick={() => clearCart()}>Vaciar Carrito</button>
                </div>
                <div className="checkout">
                    <input type="text" placeholder="name" onChange={guardarNombre}></input>
                    <input type="number" placeholder="phone" onChange={guardarContacto}></input>
                    <input type="email" placeholder="email" onChange={guardarCorreo}></input>
                    <input type="button" value="Checkout" onClick={checkout} />
                </div >
            </div>
        ) : (
            <div className="textoDeCarga">
                <div >No agregaste productos!</div>
                <Link to={`/`} >volver al inicio</Link>
            </div>
        )}
    </>

}
