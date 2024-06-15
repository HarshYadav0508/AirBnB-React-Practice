import React from "react";
import star from "../display/Star 1.png";

export default function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="open-spot">SOLD OUT</div>}
            <img src={`./images/${props.img}`} className="card-photo" alt="Katie Zaferes" />
            <div className="card-stats">
                <img src={star} className="card-star" alt="Star Rating" />
                <span> {props.rating}</span>
                <span className="grey">({props.reviewCount}) &#183; </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>  
    )
}