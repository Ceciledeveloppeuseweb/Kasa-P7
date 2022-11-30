import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Tag from "../components/Tag";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
//import Carrousel from "../components/Carrousel";



const Fiche = () => {
  const params = useParams();
  const [data, setData] = useState({});//tableau
  const navigate = useNavigate();
  console.log(params);

  useEffect(() => {
    const displayLocation = async () => {
      // const response = await axios.get("/locations.JSON");
      // const data = response.data.find(({id}) => id === params.id);
      // response.data.map(() => setData(data));
      // if (data === undefined) {
      //   navigate("/404", { state: { message: "error" } }); 
      // }
      const result = await axios.get("/locations.JSON"); //axios va me chercher l'Url

      //console.log("resultat : ", result.data);
      const locationData = result.data.find(({ id }) => id === params.id);
      result.data.map(() => setData(locationData));
      if (locationData === undefined) {
        navigate("/404", { state: { message: "error" } });
      }
    };
    displayLocation();
    // eslint-disable-next-line
  }, []);

  //const pictures = data && data.cover; //affichage conditionnel, si les données st trouvées par axios alors on affiche
 // const {title, pictures, description, host, rating, location, equipments, tags} = data;
  const title = data && data.title;
  const location = data && data.location;
  const tags = data && data.tags;
  const description = data && data.description;
  const equipments = data && data.equipments;
  const host = data && data.host;
  // console.log("image", picture);
  return (
        data && (
    <>
      <Header />
      <main>
        {/* // <div>
         //   {pictures.map((picture) */}
        {/* // <Carrousel key={picture} picture={picture} />)}
         // </div> */}
        <div>
          <div className="div-titre">
            <h1>{title}</h1>
            <p>{location}</p>
            <ul>
              <li>
                {tags.map((tag) => (
                  <ul className="tagContainer">
                  <Tag key={tag} tag={tag} />
                  </ul>
                ))}
              </li>
            </ul>
          </div>
          <div>
            <aside>
              <ul className="host">
                <span className="host-name">{host.name}</span>
                <span className="host-picture">{host.picture}</span>
              </ul>
              <span></span>
            </aside>
          </div>
        </div>
        <div className="div-carrousels">
          <Collapse title="Descriptions" description={description} />
          <Collapse
            title="Equipements"
            description={equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          />
        </div>
      </main>
      <Footer />
    </>
        )
  );
};

export default Fiche;
