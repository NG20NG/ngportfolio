import React from "react";

import footer from "./footer.module.css";

const Footer = () => {
  const test = `l'ambition d'etre le meilleur dans tous les domaines, web, android j'ai raté échoué fois dans ma vie et c ça qui fait ma vraie forcée`;
  return (
    <footer className={footer.footer}>
      <div className={footer.secondFooter}>{test}</div>
    </footer>
  );
};

export default Footer;
