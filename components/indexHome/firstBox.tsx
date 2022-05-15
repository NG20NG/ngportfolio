import React from "react";
//
import fbox from "./firstBox.module.css";
//
const FirstBox = () => {
  return (
    <div className={fbox.firstBoxContainer}>
      <div className={fbox.leftContainer}>
        <div></div>
      </div>
      <div className={fbox.rightContainer}>
        <div className={fbox.descriptionContainer}>
          <p>
            {`Je me présente Je suis un jeune développeur web assoiffe de 
            connaissance débrouillard j’aime la musique le
            calme et l’esprit d’équipe`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstBox;
