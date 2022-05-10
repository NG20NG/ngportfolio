import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import a from "./menuAnimation.module.css";

const MenuAnimation = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${a.buttonOnContainer}`,
      { y: 40, opacity: 0, duration: 1 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);
  let r: any = useRef({
    left: null,
    right: null,
  });
  const on = () => {
    const timeLineLeft = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    const timeLineRight = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    const timeLineBTN = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    if (typeof window !== "undefined") {
      if (window.innerWidth < 600) {
        timeLineLeft
          .to(r.left, { y: "-30px", duration: 0.6 })
          .to(r.left, { y: "-900px", duration: 1 });
        timeLineRight
          .to(r.right, { y: "30px", duration: 0.6 })
          .to(r.right, { y: "900px", duration: 1 });
      } else {
        timeLineLeft
          .to(r.left, { x: "-30px", duration: 0.6 })
          .to(r.left, { x: "-900px", duration: 1 });
        timeLineRight
          .to(r.right, { x: "30px", duration: 0.6 })
          .to(r.right, { x: "900px", duration: 1 });
      }
      timeLineBTN
        .to(`.${a.buttonOn}`, { opacity: 0, duration: 0.2 })
        .to(`.${a.buttonOn}`, { display: "none" })
        .to(`.${a.menuAnimationContainer}`, { display: "none", delay: 0.2 });
    }
  };
  return (
    <div className={a.menuAnimationContainer}>
      <div className={a.menuAnimation}>
        <div ref={(left) => (r.left = left)} className={a.boxLeft}></div>
        <div ref={(right) => (r.right = right)} className={a.boxRight}></div>

        <div className={a.buttonOnContainer}>
          <button className={a.buttonOn} onClick={on}>
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuAnimation;
