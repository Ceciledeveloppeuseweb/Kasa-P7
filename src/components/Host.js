import React from "react";


export default function Host({name, picture}) {
    return (
      <aside className="host-infos">
        <div className="host-name">{name}</div>
        <img className="host-picture" src={picture} alt={name} />
      </aside>
    );
  }