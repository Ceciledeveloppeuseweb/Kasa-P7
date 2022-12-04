import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Erreur404 from "../assets/erreur404.png";

const Error = () => {
  return (
    <>
      <Header />
      <div className="erreur404">
        <img src={Erreur404} alt="erreur-404" />
        <p className="pErreur">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <p className="pErreur__mobile">
          Oups ! La page que<br/>vous demandez n'existe pas.
        </p>
      <Link to="/" className="linkErreur">
        Retourner sur la page d’accueil
      </Link>
      </div>
    </>
  );
};

export default Error;
