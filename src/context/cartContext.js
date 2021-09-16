import { objectExpression } from "@babel/types";
import React, { createContext, useEffect, useState } from "react";

export const contexto = createContext({ carrito: [] });
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (producto) => {
        if (isInCart(producto.id)) {
            //hasta aqui todo bien pero si quiero aumtentar o disminuir
            /* if (isInCart(producto.id).cantidad !== producto.cantidad) {
                console.log(`De ${isInCart(producto.id).cantidad} a ${producto.cantidad}!`);
                removeItem(producto.id);// <--no hay error pero no funca
                // console.log(carrito);
                setCarrito([...carrito, producto]); <-- y termina agregando el nuevo elemento
                // console.log(carrito); <-- muestra el de menor y el de mayor cantidad
            } else {
            } */
            console.log(`Ya agregaste ${producto.cantidad} de ${producto.title}!`);
        } else {
            setCarrito([...carrito, producto]);
            console.log(carrito);
        }
    };

    const removeItem = (id) => {
        const nuevoCarrito = carrito.filter((item) => item.id !== id);
        setCarrito(nuevoCarrito); //no hace ningun cambio
        // setCarrito([]); <--- aunque no va aqui, ni siquiera esto funca
    };

    const clear = () => setCarrito([]); //<-- no creo que funcione
    const isInCart = (id) => carrito.find((item) => item.id === id);

    const contexto = {
        carrito,
        addItem,
    };

    return <Provider value={contexto}>{children}</Provider>;
};

export default CustomProvider;
