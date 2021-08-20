import { React } from "react";
import Logo from "../images/Logo.png";

export default function logo(params) {
    return <div className="logo" style={{ backgroundImage: `url(${Logo})` }}></div>;
}
