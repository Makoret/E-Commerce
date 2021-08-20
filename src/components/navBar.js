import { React } from "react";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import Search from "./search";

export default function navBar(params) {
    return (
        <header>
            <Logo />
            <div className="location">location</div>
            <Search />
            <div className="user">user</div>
            <div className="history">history</div>
            <CartWidget />
        </header>
    );
}
