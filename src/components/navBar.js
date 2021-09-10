import { React } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
// import Search from "./search";

export default function navBar(params) {
    return (
        <header>
            <Logo />
            {/* <div className="location">location</div> */}
            <Link className="categoria" to={`/ItemListContainer/pastas`}>
                Pastas
            </Link>
            <Link className="categoria" to={`/ItemListContainer/instantaneos`}>
                Instantaneos
            </Link>
            <Link className="categoria" to={`/ItemListContainer/cremas`}>
                Cremas
            </Link>
            <Link className="categoria" to={`/ItemListContainer/salsas`}>
                Salsas
            </Link>
            {/* <Search />
            <div className="user">user</div>
            <div className="history">history</div> */}
            <CartWidget />
        </header>
    );
}
