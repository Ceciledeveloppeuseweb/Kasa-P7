import React, { useState } from "react";
import flecheD from "../assets/fleched.svg";
import flecheG from "../assets/flecheg.svg";

function Carrousel({ pictures }) {//pictures.length = nombre d'images et currentPicture est l'index de l'image
  console.log(pictures);

  const [currentPicture, setCurrentPicture] = useState(0);// => représente l'index de l'image

  function nextSlide() {
    setCurrentPicture(
      currentPicture >= (pictures.length-1) ? 0 : (currentPicture + 1)// ici pictures.length-1 est la dernière image
      
    );
  }

  function preventSlide() {
    setCurrentPicture(
      currentPicture === 0 ? (pictures.length-1) : (currentPicture - 1)
    );
  }

  return (
    <>
      <img
        src={pictures[currentPicture]}
        alt="slide(s) du logement"
        className="slideLogement"
      />
      <div className="btns-directionnels">
        <img
          src={flecheG}
          alt="bouton slide précédent"
          className={pictures.length <= 1 ? "btn-gauche__clear" : "btn-gauche"}
          onClick={preventSlide}
        />

        <img
          src={flecheD}
          alt="bouton slide suivant"
          className={pictures.length <= 1 ? "btn-droite__clear" : "btn-droite"}
          onClick={nextSlide}
        />
      </div>
      <div className="compteur">
        {currentPicture+1}/{pictures.length}
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
