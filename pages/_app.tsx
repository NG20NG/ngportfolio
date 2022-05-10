import "../styles/globals.css";
import type { AppProps } from "next/app";
//
import app from "../styles/app.module.css";
//
import MenuAnimation from "../components/menuAnimation/menuAnimation";
import Header from "../components/header/header";
//
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={app.portfolioContainer}>
      <div className={app.portfolio}>
        <Header />
        <Component {...pageProps} />
        <MenuAnimation />
      </div>
    </div>
  );
}

export default MyApp;
