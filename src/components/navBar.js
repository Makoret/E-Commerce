import { React } from "react";
import Logo from "./Logo";
import Search from "./search";

export default function navBar(params) {
    return (
        <header>
            <Logo></Logo>
            <div className="location">location</div>
            <Search></Search>
            <div className="user">user</div>
            <div className="history">history</div>
            <div className="cart">cart</div>
        </header>
    );
}
