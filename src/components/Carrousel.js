import React, { useState } from "react";
import vectorD from "../assets/vector-droite.jpg";
import vectorG from "../assets/vector-gauche.jpg";

function Carrousel(pictures) {
  console.log(pictures);

  const [currentPicture, setCurrentPicture] = useState(1);

  function nextSlide() {
    setCurrentPicture(
      currentPicture === pictures.length - 1 ? 1 : currentPicture + 1
    );
  }

  function preventSlide() {
    setCurrentPicture(
      currentPicture === 1 ? pictures.length - 1 : currentPicture - 1
    );
  }

  return (
    <>
      <img
        src={pictures[currentPicture]}
        alt="slide du logement"
        className="slideLogement"
      />
      <div className="btns-directionnels">
        <div
          className={pictures.length === 1 ? "btn-gauche__clear" : "btn-gauche"}
          onClick={preventSlide}
        >
          {vectorG}
        </div>
        <div
          className={pictures.length === 1 ? "btn-droite__clear" : "btn-droite"}
          onClick={nextSlide}
        >
          {vectorD}
        </div>
      </div>
      <div className="compteur">
        {currentPicture}/{pictures.length}
      </div>
    </>
  );
}

export default Carrousel;

// return (
//     <div className="slide-container">
//       <Slide>
//        {slideImages.map((slideImage, index)=> (
//           <div className="each-slide" key={index}>
//             <div style={{'backgroundImage': `url(${slideImage.url})`}}>
//               <span>{slideImage.caption}</span>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   )
