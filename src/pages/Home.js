import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import banner from "../assets/banner-home.jpg";
import Footer from "../components/Footer";
import locations from "../datas/locations.json";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      <Banner className="banner">
        <h1 className="titre-banner">Chez vous, partout et ailleurs</h1>
        <img src={banner} alt="paysage côte rocheuse" className="img-banner " />
      </Banner>

      <main className="cards">
        {locations.map((location) => {
          return (
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
          );
        })}
      </main>

      <Footer />
    </>
  );
};

export default Home;
