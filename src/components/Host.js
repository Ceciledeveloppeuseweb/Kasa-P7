import React from "react";

// function Host(props) {
//   return (
//     <aside className="host-infos">
//      {props}
//     </aside>
//   );
// }

// export default Host;
export default function Host({name, picture}) {
    return (
        <div className="host-infos">
           <span className="host-name">{name}</span>
            <img className="host-picture" src={picture} alt={name} /> 
        </div>
    );
}
