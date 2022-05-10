import React, { useEffect } from "react";

import header from "./header.module.css";
import gsap from "gsap";

const Header = () => {
  return (
    <header className={header.header}>
      <nav className={header.nav}>
        <div className={header.ng20TitleContainer}>
          <span>NG</span>
          <span>20</span>
        </div>
        <ul>
          <li>
            Home<div></div>
          </li>
          <li>
            Project<div></div>
          </li>
          <li>
            Contact<div></div>
          </li>
          <li>
            About<div></div>
          </li>
        </ul>
      </nav>
      <div className={header.descriptionUnderNav}>
        Salut à toi étranger je suis <span>N</span>assim
        <br />
        ton développeur web préférait :D
      </div>
      <div className={header.scrollToFooterBTNContainer}>
        <button className={header.scrollToFooterBTN}>Menu</button>
      </div>
    </header>
  );
};
export default Header;
