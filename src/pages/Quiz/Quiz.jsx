import React from "react";
import "./Quiz.css";
// import TrueFalse from "../../components/TrueFalse/TrueFalse";
// import { MultipleChoice } from "../../components/MultipleChoice";
import { SingleChoice } from "../../components/SingleChoice";

const Quiz = () => {
  return (
    <div className="quiz-page">
      {/* <TrueFalse /> */}
      {/* <MultipleChoice /> */}
      <SingleChoice />
    </div>
  );
};

export default Quiz;
