import React from "react";
import changediv from "./Countries.js"
import jquery from "jquery";
import $ from "jquery";

const Card = ({ carte }) => {
  
  function changediv(id){
    document.getElementsByTagName(id).style.height = "600px"
  }

  let changelogstate = false;
  let carteidea = (carte.id).toString().replace(".","")

  const changelog = () => {
    console.log("you've been gnomed")
    if (!changelogstate) {
    $("." + carteidea).css( "height", "600px");
    $("." + carteidea).css( "width", "960px");
    $("." + carteidea).css( "margin-left", "10%");
    changelogstate = true
    }
    else if (changelogstate){
      $("." + carteidea).css( "height", "300px");
    $("." + carteidea).css( "width", "480px");
    $("." + carteidea).css( "margin-left", "5%");
    $("." + carteidea).css( "margin","3%");
    changelogstate = false
    }
  }

  return (
    <li className={["card", carteidea].join(' ')} id={carte.id} >
      <div className="infos" onClick={changelog}>
        <h2>{carte.name}</h2>
        <div class="embed">
        <iframe src={carte.link} width="50%" height="50%" allowfullscreen="allowfullscreen" ></iframe>
        </div>
        <p>{carte.house}</p>

      </div>
    </li>
  );
};

export default Card;