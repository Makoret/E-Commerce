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
            <Link className="categoria" to={`/categoria/pastas`}>
                Pastas
            </Link>
            <Link className="categoria" to={`/categoria/instantaneos`}>
                Instantaneos
            </Link>
            <Link className="categoria" to={`/categoria/cremas`}>
                Cremas
            </Link>
            <Link className="categoria" to={`/categoria/salsas`}>
                Salsas
            </Link>
            {/* <Search />
            <div className="user">user</div>
        <div className="history">history</div> */}
            <Link className="cart" to={`/cart`}>
                <CartWidget />
            </Link>
        </header>
    );
}
