import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import banner from "../assets/banner-home.jpg";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";


const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("/locations.JSON")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  //avec la méthode "axios" qui ne nécessite pas de convertir en json
  //const getData = () => {   //=> il faut préciser la méthode de la requête
  //  axios.get("../../public/locations")
  //.then((res) => setData(res.data))  //=>res.data pour ne récupérer que les datas et non toute la réponse avec les headers et autres!
  //.catch((err) => console.log(err))
  //}

  useEffect(() => { //=> permet d'effectuer une action
    getData();
  }, []);
  //console.log(getData);
  return (
    <>
      <Header />

      <Banner className="banner">
        <h1 className="titre-banner">Chez vous, partout et ailleurs</h1>
        
        <img src={banner} alt="paysage côte rocheuse" className="img-banner" />
      </Banner>

      <main className="cards">
        {data.map((location) => (
          // console.log(location);
          <NavLink
            to={"/location/" + location.id}
            className="linkCard"
            key={location.id}
          >
            <article className="location">
              <img
                src={location.cover}
                alt={location.title}
                className="img-location"
              />
              <h2 className="titre-location">{location.title}</h2>
            </article>
          </NavLink>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Home;
