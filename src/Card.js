import React from "react";
import "./Card.css";

function Card({ src, title, description, packhead, packages, place, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{packhead}</h3>
        <h4>{packages}</h4>
        <h4 className="place">
          <strong>{place}</strong>
        </h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;