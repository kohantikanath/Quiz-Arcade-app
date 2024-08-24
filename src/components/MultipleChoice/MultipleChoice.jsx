import React from "react";
import "./MultipleChoice.css"
import multiplechoice from "../../assets/multiplechoice.png";

const MultipleChoice = () => {
  return (
    <div className="mcquiz">
      <div className="mcquiz-header">
        <h1>QUIZES:</h1>
      </div>
      <div className="mcquiz-content">
        <div className="mcquiz-l">
          <img src={multiplechoice} alt="Multiple Choice Character" />
        </div>
        <div className="mcquiz-r">
          <h1>Multiple Choice</h1>
          <p>My ____ sister got sad yesterday.</p>
          <div className="mc-options">
            <div className="mc-option">
              <button className="mc-small-btn">A</button>
              <span>FORGET</span>
            </div>
            <div className="mc-option">
              <button className="mc-small-btn">B</button>
              <span>FORGOT</span>
            </div>
            <div className="mc-option">
              <button className="mc-small-btn">C</button>
              <span>WAS FORGETTING</span>
            </div>
            <div className="mc-option">
              <button className="mc-small-btn">D</button>
              <span>HAVE FORGOTTEN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoice;
