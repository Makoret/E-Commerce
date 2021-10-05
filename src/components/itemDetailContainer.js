import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestore } from '../firebase/index.js'

export default function ItemDetailContainer() {
    const { itemId } = useParams();
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        let newArr = []
        firestore.collection("items").get()
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    newArr.push(doc.data())
                })
                const aux = newArr.find((element) => element.id === Number(itemId));
                setDataToShow(aux)
            })
            .catch((error) => { console.log(error) })
    }, [itemId]);

    return dataToShow.length === 0 ? (
        <h1 className="textoDeCarga">Cargando...</h1>
    ) : (
        <div className="main">
            <ItemDetail item={dataToShow} />
        </div>
    );
}
