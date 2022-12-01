import React from "react";
import starGrey from "../assets/star-grey.svg";
import starRed from "../assets/star-red.svg";

const Rate = ({ rating }) => {
  const totalRating = [1, 2, 3, 4, 5];
  return (
    <div className="rateBox">
      {totalRating.map((el) =>
        rating >= el ? (
            <img key={el.toString()} src={starRed} alt="étoile rouge" />
        ) : (
            <img key={el.toString()} src={starGrey} alt="étoile grise" />
        )
      )}
    </div>
  );
};

export default Rate;

//               {/* créer un composant rating auquel on passe le rating en props.
// A l'intérieur importer l'étoile en svg et créer un tableau intermédiaire
//  dans lequel on stocke l'état des étoiles ( de taille 5 du coup ). Une fois que c'est fait,
// on a un tableau sur lequel on peut utiliser la fonction map(). */}
