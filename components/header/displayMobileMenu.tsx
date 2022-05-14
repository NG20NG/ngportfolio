import React from "react";
//
import menu from "./displayMobileMenu.module.css";
//
const MobileMenu = () => {
  return (
    <div className={menu.mobileMenuContainer}>
      <div className={menu.mobileMenu}>
        <ul className={menu.listMenuUL}>
          <li>Home</li>
          <li>Project</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
