import "../styles/globals.css";
import type { AppProps } from "next/app";
import app from "../styles/app.module.css";
import menu from "../components/header/displayMobileMenu.module.css";
import header from "../components/header/header.module.css";
import gsap from "gsap";
//
import { menuMobileContext } from "../contexts/contexts";
//
import MenuAnimation from "../components/menuAnimation/menuAnimation";
import Header from "../components/header/header";
import { useState } from "react";
//
//
function MyApp({ Component, pageProps }: AppProps) {
  const [isAnimated, setIsAnimated] = useState<Boolean>(false);
  const menuMobileAnimation = () => {
    if (isAnimated !== false) {
      gsap.to("." + menu.mobileMenuContainer, {
        display: "none",
        height: 0,
        paddingBottom: 0,
        zIndex: -1,
      });
      gsap.to("." + header.scrollToFooterBTN, { top: 23, duration: 0.1 });
    } else {
      gsap.to("." + menu.mobileMenuContainer, {
        display: "flex",
        height: 188,
        paddingBottom: 10,
      });
      gsap.to("." + header.scrollToFooterBTN, { top: -5, duration: 0.1 });
    }
    setIsAnimated((prev) => !prev);
    console.log("click");
  };
  return (
    <div className={app.portfolioContainer}>
      <div className={app.portfolio}>
        <menuMobileContext.Provider value={{ menuMobileAnimation, isAnimated }}>
          <Header />
          <Component {...pageProps} />
          <MenuAnimation />
        </menuMobileContext.Provider>
      </div>
    </div>
  );
}

export default MyApp;
