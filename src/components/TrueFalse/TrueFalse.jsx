import React from "react";
import "./TrueFalse.css";
import truefalse from "../../assets/truefalse.png";

const TrueFalse = () => {
  return (
    <div className="tfquiz">
      <div className="tfquiz-header">
        <h1>QUIZES:</h1>
      </div>
      <div className="tfquiz-l">
        <img src={truefalse} alt="" />
      </div>
      <div className="tfquiz-r">
        <h1>True / False</h1>
        <p>
          A polygon that has five sides and five angles is called a pentagon.
        </p>
        <div className="tf-buttons">
          <button className="true-btn">TRUE</button>
          <button className="false-btn">FALSE</button>
        </div>
      </div>
    </div>
  );
};

export default TrueFalse;
