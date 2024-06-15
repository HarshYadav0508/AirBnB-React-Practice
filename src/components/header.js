import React from "react";
import logo from "../display/airbnb 1.png";

export default function Header () {
    return (
        <nav className="header">
            <div className="right-section">
                <img className="header-logo" src={logo} alt="logo"/>
            </div>
            <div className="left-section"></div>
        </nav>
    );
}

