import React from "react";
import Select from "react-select";
import Categorias from "./ListaCategorias";

export default function MostarCategorias() {
    return (
        <div>
            <Select className="selector" options={Categorias.lista} />
        </div>
    );
}
