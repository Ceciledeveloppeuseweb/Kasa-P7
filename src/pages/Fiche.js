import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
//import Tag from "../components/Tag";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
//import Carrousel from "../components/Carrousel";

const Fiche = () => {
  const params = useParams();
  const [data, setData] = useState({}); //tableau
  const navigate = useNavigate();
  //console.log(params);

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
  //const tags = data && data.tags;
  const description = data && data.description;
  //const equipments = data && data.equipments;
  const host = data && data.host;
  // console.log("image", picture);
  return (
    data && (
      <>
        <Header />
        <main className="fiche-contener">
          {/* // <div>
         //   {pictures.map((picture) */}
          {/* // <Carrousel key={picture} picture={picture} />)}
         // </div> */}
          <div className="banner-fiche">Banner Fiche Location</div>

          <section className="fiche-infos">
            <section className="div-titre">
              <h1 className="fiche-titre">{title}</h1>
              <p className="localisation">{location}</p>
            </section>

            <Host name={host.name} picture={host.picture} />
          </section>

          <section className="div-carrousels">
            {/* <ul className="tagContainer">
                {tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </ul> */}
            <Collapse title="Descriptions" description={description} />
            {/* <Collapse
              title="Equipements"
              description={equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            /> */}
          </section>
        </main>
        <Footer />
      </>
    )
  );
};

export default Fiche;
