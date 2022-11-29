import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//import { useNavigate } from "react-router-dom";
//import { useEffect, useState } from "react";
import Header from "../components/Header";
//import locations from "../../locations.JSON";

const Fiche = (props) => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    console.log(id);
    useEffect(() => {
      axios
        .get("../../public/locations.JSON") //axios va me chercher l'Url
        .then((res) => setData(res.data));
    }, []);
    
  
    
  return (
    <>
      <Header />
      <main>
        {data.find((location) => id === useParams.id)
        }
        <h1 key={id}>Bonjour</h1>
        <img src={props.cover} alt="location"/>
      </main>
    </>
  );
};

export default Fiche;
