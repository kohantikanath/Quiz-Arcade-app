import React, { useState } from "react";
import "./Quiz.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import html from "../../data/html";
import css from "../../data/css";
import javas from "../../data/javas";
import react from "../../data/react";

const Quiz = () => {
  const { category } = useSelector((state) => state.category);

  let data = [];

  if (category === "HTML") {
    data = html;
  } else if (category === "CSS") {
    data = css;
  } else if (category === "JavaScript") {
    data = javas;
  } else if (category === "React") {
    data = react;
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = data[currentQuestionIndex];

  const handleNextQuestion = () => {
    checkAnswer();
    setUserAnswers([...userAnswers, selectedAnswers]);
    setSelectedAnswers([]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleHomePage = () => {
    navigate("/home");
  };

  const checkAnswer = () => {
    if (
      JSON.stringify(selectedAnswers.sort()) ===
      JSON.stringify(currentQuestion.answer.sort())
    ) {
      setScore(score + 10);
    }
  };

  const handleAnswerSelection = (choiceIndex) => {
    if (currentQuestion.questionType === "multipleChoice") {
      setSelectedAnswers([choiceIndex]);
    } else if (
      currentQuestion.questionType === "multipleChoiceMultipleAnswers"
    ) {
      if (selectedAnswers.includes(choiceIndex)) {
        setSelectedAnswers(
          selectedAnswers.filter((index) => index !== choiceIndex)
        );
      } else {
        setSelectedAnswers([...selectedAnswers, choiceIndex]);
      }
    } else if (currentQuestion.questionType === "trueFalse") {
      setSelectedAnswers([choiceIndex]);
    }
  };

  return (
    <div
      className="quiz-page"
      style={{
        background:
          currentQuestion && currentQuestion.questionType
            ? currentQuestion.questionType === "trueFalse"
              ? "#7D85DF"
              : currentQuestion.questionType === "multipleChoice"
              ? "#B87F52"
              : "#F15B5B"
            : "#4B39B5",
      }}
    >
      {currentQuestionIndex < data.length ? (
        <>
          <div className="quiz-page-head">
            <p>Score: {score}</p>
            <div className="progress-cont">
              <div
                className="progress-bar"
                style={{
                  width: `${(currentQuestionIndex / data.length) * 100}%`,
                }}
              >
                <div className="progress-circle"></div>
              </div>
            </div>
          </div>
          <div className="quiz-page-cont">
            <h1>{`${currentQuestionIndex + 1}) ${
              currentQuestion.question
            }`}</h1>
            <div className="choices">
              {currentQuestion.choices.map((choice, index) => (
                <div key={index} className="choice">
                  <input
                    type={
                      currentQuestion.questionType ===
                      "multipleChoiceMultipleAnswers"
                        ? "checkbox"
                        : "radio"
                    }
                    name="choice"
                    checked={selectedAnswers.includes(index + 1)}
                    onChange={() => handleAnswerSelection(index + 1)}
                  />
                  <label>{choice}</label>
                </div>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswers.length === 0}
              className="next-btn"
              style={{
                color:
                  currentQuestion.questionType === "trueFalse"
                    ? "#7D85DF"
                    : currentQuestion.questionType === "multipleChoice"
                    ? "#B87F52"
                    : currentQuestion.questionType ===
                      "multipleChoiceMultipleAnswers"
                    ? "#F15B5B"
                    : "#4B39B5",
              }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="quiz-last">
          <h1>Quiz Completed!</h1>
          {(score / (data.length * 10)) * 100 > 30 ? (
            <p className="quiz-msg">Congratulations! You did great!</p>
          ) : (
            <p className="quiz-msg">Oops! Better luck next time.</p>
          )}
          <p className="quiz-score">{`You scored ${(
            (score / (data.length * 10)) *
            100
          ).toFixed(2)}%`}</p>
          <button className="next-btn" onClick={handleHomePage}>
            Go Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
