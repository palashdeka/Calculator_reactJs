import React from "react";
import style from "./Buttons.module.css";
const Buttons = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".", 
  ];
  return (
    <div className={style.buttons_conatiner}>
      {buttonNames.map((button) => (
        <button className={style.button} onClick={()=>onButtonClick(button)}>{button}</button>
      ))}
    </div>
  );
};

export default Buttons;
