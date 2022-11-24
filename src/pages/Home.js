import React from "react";
import Banner from "../components/Banner";
import ListLoc from "../components/ListLoc";
import Header from "../components/Header";
import banner from "../assets/banner-home.jpg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <Banner className="banner">
        <h1 className="titre-banner">Chez vous, partout et ailleurs</h1>
        <img src={banner} alt="paysage côte rocheuse" className="img-banner " />
      </Banner>

      <ListLoc />

      <Footer />
    </>
  );
};


export default Home;
