import React from "react";
import FirstBox from "./firstBox";
import Image from "next/image";
//
import sbox from "./secondBox.module.css";
//
const SecondBox = () => {
  const pathSBox = "/index/secondBox/";
  const cardArray = [
    ["HTML", `${pathSBox}html.svg`, [70, 70], "rgb(255, 68, 30)"],
    ["CSS", `${pathSBox}css.svg`, [70, 70], "rgb(0, 137, 236)"],
    ["Javascript", `${pathSBox}javascript.svg`, [70, 70], "rgb(236, 189, 0)"],
    ["React Js", `${pathSBox}reactJs.png`, [70, 75], "rgb(0, 187, 255)"],
    ["Next Js", `${pathSBox}nextJs.png`, [55, 95], "rgb(0, 72, 255)"],
    ["Node Js", `${pathSBox}nodejs.svg`, [55, 90], "rgb(11, 172, 0)"],
    ["MongoDB", `${pathSBox}mongoDB.png`, [30, 110], "rgb(0, 154, 98)"],
    [
      "Python",
      `${pathSBox}python.png`,
      [70, 70],
      `rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(9, 106, 180),
      rgb(255, 234, 0),
      rgb(255, 234, 0),
      rgb(255, 234, 0),
      rgb(255, 234, 0),
      rgb(255, 234, 0),
      rgb(255, 234, 0),
      rgb(255, 234, 0),
      rgb(255, 234, 0),
      rgb(255, 234, 0),
      rgb(255, 234, 0)`,
    ],
  ];
  return (
    <div className={sbox.secondBoxContainer}>
      {cardArray.map((e: any, i) => {
        return (
          <div key={i} className={sbox.boxCard}>
            <div className={sbox.cardTop}>
              <Image
                src={`${e[1]}`}
                height={e[2][0]}
                width={e[2][1]}
                alt="NG skills logo"
              />
            </div>
            <div
              className={sbox.cardBottom}
              style={{
                backgroundColor: e[3],
                backgroundImage: `linear-gradient(to bottom right,${e[3]})`,
              }}
            >
              {e[0]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondBox;
