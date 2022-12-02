import React, { useState } from "react";
import VectorD from "../assets/Vector-droite.jpg";
import VectorG from "../assets/Vector-gauche.jpg";

function Carrousel(pictures) {
    console.log(pictures);
  const [currentIndex, setCurrentIndex] = useState(1);
  //const index = pictures.length;


  function nextSlide() {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 1 : currentIndex + 1);
  };

  function preventSlide() {
    setCurrentIndex(currentIndex === 1 ? pictures.length - 1 : currentIndex - 1);
  };

  return (
    <div className="contener-slide">
      
        <img
         
          src={pictures[currentIndex]}
          alt="slide du logement"
          className="slideLogement"
        />
      
      <div className="btns-directionnels">
        <button
          className={pictures.length === 1 ? "btn-gauche__clear" : "btn-gauche"} 
          onClick={preventSlide}
        >
          {VectorG}
        </button>
        <button
          className={pictures.length === 1 ? "btn-droite__clear" : "btn-droite"}
          onClick={nextSlide}
        >
          {VectorD}
        </button>
      </div>
      <div className="compteur">{currentIndex}/{pictures.length}</div>
    </div>
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
