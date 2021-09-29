import React, { createContext, useEffect, useState } from "react";

export const contexto = createContext({ carrito: [] });
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (producto) => {
        if (isInCart(producto.id)) {
            if (isInCart(producto.id).cantidad !== producto.cantidad) {
                isInCart(producto.id).cantidad = producto.cantidad
            } else {
                console.log(`Ya existe ${producto.cantidad} de ${producto.title} en el carrito!`);
            }
        } else {
            setCarrito([...carrito, producto]);
        }
    };

    useEffect(() => {
        return () => {
        }
    }, [carrito])

    const removeItem = (id) => {
        const nuevoCarrito = carrito.filter((item) => item.id !== id);
        setCarrito(nuevoCarrito);
    };

    const clear = () => setCarrito([]); //<-- no funcione
    const isInCart = (id) => carrito.find((item) => item.id === id);

    const contexto = { carrito, addItem, clear, removeItem, isInCart };

    return <Provider value={contexto}>{children}</Provider>;
};

export default CustomProvider;
