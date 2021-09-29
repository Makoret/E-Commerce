import React, { } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { AiOutlineNumber } from "react-icons/ai";


export default function CartElement(item, { remove }) {
    const { producto } = item;

    const removeItem = () => {
        remove(producto.id)
    }

    return (
        <div className="cartReceiptData">
            <div className="cartItem">
                <img className="cartThumbnail" src={producto.pictureUrl} alt={producto.title} />
                <div className="cartInfo">
                    <p>{producto.title}</p>
                    <p><GiPriceTag /> {producto.price} PEN</p>
                    <p><AiOutlineNumber /> {producto.cantidad}</p>
                </div>
            </div>
            <button className="cartBtn" onClick={removeItem}>
                <RiDeleteBin6Line className="cartDelButton" />
            </button>
            <div className="cartSubtotal">
                <p>Subtotal: {(producto.price * producto.cantidad).toFixed(2)}</p>
            </div>
        </div>
    )
}
