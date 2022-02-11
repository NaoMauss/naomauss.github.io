import React from "react";
import { useState, useEffect } from "react";
import changediv from "./Countries.js"
import jquery from "jquery";
import $ from "jquery";
import axios from "axios";

const Card = ({ carte }) => {
  
  function changediv(id){
    document.getElementsByTagName(id).style.height = "600px"
  }

  let changelogstate = false;
  let carteidea = (carte.id).toString().replace(".","");
  let dimensions = ["100%", "50%"];

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get('http://localhost:3001/data/json')
    .then((res) => setData(res.data.adherent));
  }, []);  
  
  let dataId = []
  for (var i = 0; i < data.length; i++){
    dataId.push((data[i].id).toString().replace(".",""))
  }
  console.log(dataId)

  const changelog = () => {
    for (var y = 0; y < dataId.length; y++){
    $("." + dataId[y]).css( "height", "300px");
    $("." + dataId[y]).css( "width", "480px");
    $("." + dataId[y]).css( "margin-left", "3%");
    $("." + dataId[y]).css( "margin-right","3%");
    $("." + dataId[y]).css( "margin-top","3%");
    $("." + dataId[y]).css( "margin-bottom","3%");
    $("." + carteidea + "2").css( "height", "50%");
    $("." + carteidea + "2").css( "width", "50%");
    }
    if (!changelogstate) {
    $("." + carteidea).css( "height", "600px");
    $("." + carteidea).css( "width", "960px");
    $("." + carteidea).css( "margin-left", "3%");
    changelogstate = true
    $("." + carteidea + "2").css( "height", "375px");
    $("." + carteidea + "2").css( "width", "600px");
    }
    else if (changelogstate){
     $("." + carteidea).css( "height", "300px");
    $("." + carteidea).css( "width", "480px");
    $("." + carteidea).css( "margin-left", "3%");
    $("." + carteidea).css( "margin-right","3%");
    $("." + carteidea).css( "margin-top","3%");
    $("." + carteidea).css( "margin-bottom","3%");
    changelogstate = false
    $("." + carteidea + "2").css( "height", "50%");
    $("." + carteidea + "2").css( "width", "50%");
    }
  }

  return (
    <li className={["card", carteidea].join(' ')} id={carte.id} >
      <div className="infos" onClick={changelog}>
        <h2>{carte.name}</h2>
        <div class="embed">
        <iframe src={carte.link} className={carteidea+"2"} height={dimensions[0]} width={dimensions[1]} allowfullscreen="allowfullscreen" ></iframe>
        </div>
        <p>{carte.house}</p>

      </div>
    </li>
  );
};

export default Card;