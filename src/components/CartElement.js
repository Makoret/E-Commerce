import React, { } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import $ from 'jquery'

export default function CartElement(item, { del }) {
    const { producto } = item;

    // $(".cartBtn").onClick = function () {
    //     console.log(producto);
    // }

    // function erase(element) {
    //     console.log(element);
    //     /* del(element) */
    // }
    return (
        <div className="cartReceiptData">
            <div className="cartItem">
                <img className="cartThumbnail" src={producto.pictureUrl} alt={producto.title} />
                <div className="cartInfo">
                    <p>{producto.title}</p>
                    <p>P. Unidad: {producto.price} PEN</p>
                    <p>Cantidad: {producto.cantidad}</p>
                </div>
            </div>
            <button className="cartBtn">
                <RiDeleteBin6Line className="cartDelButton" />
            </button>
            <div className="cartSubtotal">
                <p>Subtotal: {(producto.price * producto.cantidad).toFixed(2)}</p>
            </div>
        </div>
    )
}
