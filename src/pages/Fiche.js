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
      console.log(logement.id);
      console.log(logement.pictures);
      console.log(logement.title);
      console.log(logement.location);
      console.log(logement.pictures.length);
      //result.data.map(() => setData(logement));
      setData(logement);

      if (logement === undefined) {
        navigate("/404", { state: { message: "error" } });
      }
    };
    displayLocation();
    // eslint-disable-next-line
  }, []);

  //affichage conditionnel, si les données st trouvées par axios alors on affiche
  return (
    data && (
      <>
        <Header />
        <main className="fiche-contener">
          <div className="banner-fiche">
            {/* {pictures.map((picture, index) => (
              <Carrousel key={index} pictures={pictures} picture={picture} />
             ))} */}
            <Carrousel
              pictures={data.pictures}
              picture={data.pictures.picture}
            />
          </div>
          <section className="fiche-infos">
            <section className="div-titre infos-TitrePTag">
              <h1 className="fiche-titre">{data.title}</h1>
              <p className="localisation">{data.location}</p>
              <div className="tags">
                {data.tags.map((tag) => (
                  <Tag key={tag} className="tag" tag={tag} />
                  // <li key={el} className="tag" >{el}</li>
                ))}
              </div>
            </section>

            <section className="infos-HostRating">
              <Host name={data.host.name} picture={data.host.picture} />

              <Rate rating={data.rating} />
            </section>
          </section>

          <section className="contenerDivs">
            <div className="collapses-logement">
              <Collapse
                title="Descriptions"
                description={data.description}
                className="collapse__logement"
              />
              <Collapse
                title="Equipements"
                className="collapse__logement"
                description={data.equipments.map((el) => (
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
