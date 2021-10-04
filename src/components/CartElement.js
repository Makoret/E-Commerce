import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { AiOutlineNumber } from "react-icons/ai";
import { contexto } from "../context/cartContext";


export default function CartElement(item) {
    const { removeItem } = useContext(contexto);
    const { producto } = item;

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
            <button className="cartBtn" onClick={() => { removeItem(producto) }}>
                <RiDeleteBin6Line className="cartDelButton" />
            </button>
            <div className="cartSubtotal">
                <p>Subtotal: {(producto.price * producto.cantidad).toFixed(2)}</p>
            </div>
        </div>
    )
}
