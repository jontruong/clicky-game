import React from "react";
import "./style.css";

function CharCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.handleClicked(props.id)} />
      </div>
    </div>
  );
}

export default CharCard;
