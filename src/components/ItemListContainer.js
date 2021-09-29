import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { firestore } from '../firebase/index.js'

export default function ItemListContainer() {

    const { categoriaId } = useParams();
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        let newArr = []
        firestore.collection("items").get()
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    newArr.push(doc.data())
                })
                const aux = newArr.filter((element) =>
                    categoriaId ? element.categoria === categoriaId : element.categoria
                );
                setDataToShow(aux);
            })
            .catch((error) => { console.log(error) })
    }, [categoriaId]);

    return (
        <div className="main">
            <Welcome Text="Lista de productos" />
            <ItemList productos={dataToShow} />
        </div>
    );
}
function Welcome(props) {
    return <h1>{props.Text}</h1>;
}
