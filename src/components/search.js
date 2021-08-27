import { React } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import MostarCategorias from "./MostarCategorias";

export default function search(params) {
    return (
        <form className="search">
            <div className="lista">
                <MostarCategorias />
            </div>
            <input className="searchInput"></input>
            <button type="submit" className="searchButton">
                <GiMagnifyingGlass />
            </button>
        </form>
    );
}
