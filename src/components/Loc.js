import React from "react";

const Loc = (props) => {
  return (
    <article className="location">
      <img src={props.location.cover} alt={props.location.title} className="img-location" />
      <h2 className="titre-location">{props.location.title}</h2>
    </article>
  );
};

export default Loc;
