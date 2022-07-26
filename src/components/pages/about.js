<<<<<<< HEAD
import React from 'react';

export default function() {
    return (
        <div>
            About
        </div>
    );
=======
import React from "react";
import profilePicture from "../../../static/assets/images/bio/Me.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        My name is Michael Childress. I am a former beverage director, hotel manager, bar manager, and craft cocktail bartender making my way into the technology world. I have recently finshed my studies in software development from Bottega based out of Utah. My passions lie in family, business, and learning about technology, and motorsport. My goal with this portfolio is to show a visual representation of my résumé built in React in order to best showcase my development abilities. 
      </div>
    </div>
  );
>>>>>>> origin/main
}