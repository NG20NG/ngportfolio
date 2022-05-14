import React, { useContext } from "react";
import header from "./header.module.css";
//
import { menuMobileContext } from "../../contexts/contexts";
//
//
const Header = () => {
  const { menuMobileAnimation, isAnimated } = useContext(menuMobileContext);
  let width: any;
  if (typeof window === "object" ? window.innerWidth : undefined) {
    width = typeof window === "object" ? window.innerWidth : undefined;
  }
  console.log(width);

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
      <div className={header.scrollToFooterBTNContainer} style={{ zIndex: 1 }}>
        <button
          className={header.scrollToFooterBTN}
          onClick={() => width < 600 && menuMobileAnimation()}
        >
          Menu
        </button>
      </div>
    </header>
  );
};
export default Header;
