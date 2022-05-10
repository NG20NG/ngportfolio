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
            je suis un jeune développeur web débrouillard j'aime le calme et
            l'esprit d'équipe assoiffé de connaissance
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstBox;
