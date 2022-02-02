import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isCrescent, setIsCrescent] = useState(true);
  const radios = ["Adherent", "Conf", "Intermédiaires", "Syndicats", "Congrès", "UD-FD"];
  let doto = "";
  
 

useEffect(() => {
    axios
    .get('http://localhost:3001/data/json')
    .then((res) => setData(res.data.adherent));
  }, []);  

/*useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);*/



  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  function changediv(cname){
    document.getElementsByClassName(cname).style.height = "600px"
  }

  return (
    <div className="countries">
      <ul className="radio-container">
        {radios.map((categorie, index) => (
          <li key={index}>
            <input
              type="radio"
              name="categorie"
              id={categorie}
              checked={categorie === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={categorie}>{categorie}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>Annuler recherche</button>
      )}
      <br />
      <input
        type="text"
        placeholder="Entrez le nom d'un pays (en anglais)"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <br />
      <ul>
        {data
          .filter((carte) => carte.categorie.includes(selectedRadio))
          .filter((carte) =>
            carte.name
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
          .sort((a, b) => {
            if (isCrescent) {
              return a.id - b.id;
            } else {
              return b.id - a.id;
            }
          })
          .map((carte) => (
            <Card key={carte.name} carte={carte} />
          ))}
      </ul>
    </div>
  );
};




export default Countries
