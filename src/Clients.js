import React from "react";
import "./Clients.css";

function Clients({ src, description }) {
  return (
    <div className="clients" id="clients">
      <img src={src} alt="" />
      <div className="clients__info">
        <h2>{description}</h2>
      </div>
    </div>
  );
}

export default Clients;
