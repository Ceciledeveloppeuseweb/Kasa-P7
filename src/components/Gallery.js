import React from "react";
import Appart from "../components/Appart";
import locations from "../datas/locations.json";

const Gallery = () => {
  return (
    <main className="gallery">
      {locations.map((location) => {
        return (
          <Appart
            key={location.id}
            location={location}
            
          />
        );
      })}
    </main>
  );
};

export default Gallery;
