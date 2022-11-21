import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import listLoc from "../datas/locations";
import Appart from "./Appart";
import Loader from "./Loader";
//import listLoc from '../datas/locations'

const Gallery = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(false);
  const [listLoc, setListLoc] = useState([]);

  useEffect(() => {
    async function fetchListLoc() {
      setIsDataLoading(true)
      try {
        const response = await fetch('listLoc');
        const listLoc = await response.json()
        setListLoc(listLoc)

      } catch (error) {
        console.log('error !')
        setError(true)
      } finally {
        setIsDataLoading(false)
      }
    }
    fetchListLoc()
  }, [])


  if (error) {
    alert("Oups ! Problème d'affichage !");
  }
  return (
    <div className="gallery">
      {isDataLoading ? (
        <Loader />
      ) : (
        listLoc.map(loc => (
          <Appart key={loc.id} title={loc.title} cover={loc.cover} />
        ))
        
      )}
    </div>
   
  );
};

export default Gallery;
