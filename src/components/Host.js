import React from "react";

// function Host(props) {
//   return (
//     <aside className="host-infos">
//      {props}
//     </aside>
//   );
// }

// export default Host;

// export default function Host({name, picture}) {
//     return (
//         <div className="host-infos">
//            <span className="host-name">{name}</span>
//             <img className="host-picture" src={picture} alt={name} />
//         </div>
//     );
// }

// export default function Host(props) {
//   return (
//     <aside className="host-infos">
//       <div className="host-name">{props.hostName}</div>
//       <img className="host-picture" src={props.hostPic} alt={props.hostName} />
//     </aside>
//   );
// }
export default function Host({name, picture}) {
    return (
      <aside className="host-infos">
        <div className="host-name">{name}</div>
        <img className="host-picture" src={picture} alt={name} />
      </aside>
    );
  }


// export default function Host(props) {
// 	return (
// 		<aside className="host-comp">
// 			<div className="host-name">{props.hostName}</div>
// 			<div className="hostPicture">
// 				<img src={props.hostPic} alt={props.id} />
// 			</div>
// 		</aside>
// 	);
// }
