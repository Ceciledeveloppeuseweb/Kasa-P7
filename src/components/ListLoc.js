import React from "react";
import Loc from "./Loc";
import locations from "../datas/locations.json";

const ListLoc = () => {
  return (
    <main className="cards">
      {locations.map((location) => {
        return (
          <Loc
            key={location.id}
            location={location}
            
          />
        );
      })}
    </main>
  );
};

export default ListLoc;
