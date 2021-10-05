import React, { Fragment, useContext, useEffect, useState } from "react";
import { contexto } from "../context/cartContext";
import CartElement from "./CartElement";
import { Link } from "react-router-dom";
import { firestore } from '../firebase/index.js'
import { FaHome } from "react-icons/fa";


export default function Cart() {
    const { removeItem, carrito, clearCart } = useContext(contexto);
    const [total, setTotal] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contacto, setContacto] = useState("")
    const [boletaId, setBoletaId] = useState("")
    const [checkoutDate, setCheckoutDate] = useState("")

    const getDate = () => {
        setCheckoutDate(Date().toLocaleString())
        console.log(checkoutDate);
        return checkoutDate
    }

    const checkout = () => {
        const collection = firestore.collection("ordenes")
        const usuario = { nombre, correo, contacto }
        const orden = { carrito, usuario, date: getDate(), cantidad: totalItems, costo: total }
        const query = collection.add(orden)

        let newArr = []
        firestore.collection("ordenes").get()
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    newArr.push({ ...doc.data(), ID: doc.id })
                })
                console.log(newArr);
                const aux = newArr.find((element) => element.date === checkoutDate);
                console.log(aux);
                setBoletaId(aux.ID)
            })
            .catch((error) => { console.log(error) })
        clearCart()
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

    return <div className="cartView">
        {carrito.length > 0 ? (
            <div className="cartData">
                <div className="cartReceipt">
                    {carrito.map((element) => (
                        <Fragment key={element.id}>
                            <CartElement producto={element} />
                        </Fragment>
                    ))}
                    <div className="cartCost">
                        Cantidad: {totalItems}<br />
                        Costo total: {total}
                    </div>
                    <input className="delCart" type="button" onClick={() => clearCart()} value="Vaciar Carrito" />
                </div>
                {boletaId !== "" ? (
                    <div className="done">
                        <h3>Codigo de boleta</h3>
                        <div>{boletaId}</div>
                    </div>
                ) : (
                    <div className="checkout">
                        <h4>Compra ya!</h4>
                        <input type="text" placeholder="name" onChange={guardarNombre}></input>
                        <input type="text" placeholder="phone" onChange={guardarContacto}></input>
                        <input type="email" placeholder="email" onChange={guardarCorreo}></input>
                        <input className="checkoutBtn" type="button" value="Checkout" onClick={checkout} />
                    </div >
                )
                }
            </div>
        ) : (
            <>
                {boletaId !== "" ? (
                    <div className="done">
                        <h3>Codigo de boleta</h3>
                        <div>{boletaId}</div>
                    </div>
                ) : (
                    <div className="textoDeCarga">
                        <Link className="home" to={`/`} ><FaHome className="home" /></Link>
                        <div >No agregaste productos!</div>
                    </div>
                )
                }

            </>
        )}
    </div>

}
