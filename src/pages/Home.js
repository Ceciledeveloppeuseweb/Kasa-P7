import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <div>
      <Header />

      <Banner>
        <h1 className="titre-banner">Chez vous, partout et ailleurs</h1>
        <img src={banner} alt="bannière paysage" className="img-banner" />
      </Banner>

      <Gallery />
    </div>
  );
};

export default Home;
