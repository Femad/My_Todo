import React from "react";
import "./btnComp.css";

const BtnComp = ({ btnValue, onclick, btnColor }) => {
  return (
    <button onClick={onclick} className={btnColor}>
      {btnValue}
    </button>
  );
};

export default BtnComp;
