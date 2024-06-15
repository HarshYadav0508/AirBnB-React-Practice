import React from "react";
import grid from "../display/Group 77.svg";

export default function Main () {
    return  (
        <main className="main-content">
            <img src={grid} className="main-photo" />
            <h1 className="main-header">Online Experiences</h1>
            <p className="main-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </main>
    );
}