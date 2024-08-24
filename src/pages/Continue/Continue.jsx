import React from "react";
import "./Continue.css";

import Letscontinue from "../../assets/lets-continue.png";

import { useNavigate } from "react-router-dom";

const Continue = () => {
  const navigate = useNavigate();

  return (
    <div className="continue">
      <div className="continue-l">
        <img src={Letscontinue} alt="" />
      </div>
      <div className="continue-r">
        <h1>Quiz Time</h1>
        <p>
          Let's put your knowledge <br /> to the test!
        </p>
        <button className="continue-btn" onClick={() => navigate("/quiz")}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Continue;
