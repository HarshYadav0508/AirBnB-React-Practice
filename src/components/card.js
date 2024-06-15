import React from "react";
import star from "../display/Star 1.png";

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="open-spot">{badgeText}</div>}
            <img src={`./images/${props.coverImg}`} className="card-photo" alt="Katie Zaferes" />
            <div className="card-stats">
                <img src={star} className="card-star" alt="Star Rating" />
                <span> {props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) &#183; </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>  
    )
}