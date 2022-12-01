import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Host from "../components/Host";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";

const Fiche = () => {
  const params = useParams();
  const [data, setData] = useState(); //tableau
  const navigate = useNavigate();
  //console.log(params);

  useEffect(() => {
    const displayLocation = async () => {
      const result = await axios.get("/locations.JSON"); //axios va me chercher l'Url
      const logement = result.data.find(({ id }) => id === params.id);
      console.log(logement);
       result.data.map(() => setData(logement));
      //setData(logement);
      if (logement === undefined) {
        navigate("/404", { state: { message: "error" } });
      }
    };
    displayLocation();
    // eslint-disable-next-line
  }, []);

  //const pictures = data && data.cover;
  // const {title, pictures, description, host, rating, location, equipments, tags} = data;
  const title = data && data.title;
  console.log(title);

  const location = data && data.location;
  console.log(location);

  //const tags = [];
   const tags = data && data.tags;
  console.log(tags);

  const host = data && data.host; //
  console.log(host);

  const description = data && data.description;
  console.log(description);

  //const equipments = [];
  const equipments = data && data.equipments;
  console.log(equipments);

   const rating = data && data.rating;
   console.log(rating);

  //affichage conditionnel, si les données st trouvées par axios alors on affiche
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

          <section className="contenerDivs">
            <div className="tagsEtRating">
              <div className="tags">
                {tags.map((tag) => (
                  <Tag key={tag} className="tag" tag={tag} />
                  // <li key={el} className="tag" >{el}</li>
                ))}
              </div>
              <Rate rating={rating}/>
            </div>

            
            <div className="contener-collapses">
              <Collapse
                title="Descriptions"
                description={description}
                className="collapse__logement"
              />
              <Collapse
                title="Equipements"
                className="collapse-logement collapse-equipement"
                description={equipments.map((el) => (
                  <li key={el} className="equipement">
                    {el}
                  </li>
                ))}
              />
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  );
};

export default Fiche;
