import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Host from "../components/Host";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import Carrousel from "../components/Carrousel";

const Fiche = () => {
  const params = useParams();
  const [data, setData] = useState(); 
  const navigate = useNavigate();

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

  const title = data && data.title;

  const location = data && data.location;

  const tags = data && data.tags;

  const host = data && data.host; //

  const description = data && data.description;

  const equipments = data && data.equipments;

  const rating = data && data.rating;

  const pictures = data && data.pictures;

  //affichage conditionnel, si les données st trouvées par axios alors on affiche
  return (
    data && (
      <>
        <Header />
        <main className="fiche-contener">
          <div className="banner-fiche">
            {pictures.map((picture, index) => (
              <Carrousel key={index} pictures={pictures} picture={picture} />
            ))}
          </div>
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
              <Rate rating={rating} />
            </div>
            <div className="collapses-logement">
              <Collapse
                title="Descriptions"
                description={description}
                className="collapse__logement"
              />
              <Collapse
                title="Equipements"
                className="collapse__logement"
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
