const react = [
  {
    question: "Which method is used to update the state in a React component?",
    questionType: "multipleChoice",
    choices: ["setState()", "updateState()", "changeState()", "modifyState()"],
    answer: [1],
  },
  {
    question:
      "Which hooks can be used to perform side effects in a React component?",
    questionType: "multipleChoiceMultipleAnswers",
    choices: [
      "useEffect",
      "useCallback",
      "useLayoutEffect",
      "useImperativeHandle",
    ],
    answer: [1, 3],
  },

  {
    question:
      "In React, the render() method is required in every class component.",
    questionType: "trueFalse",
    choices: ["True", "False"],
    answer: [1],
  },
  {
    question: "React hooks can only be used in class components.",
    questionType: "trueFalse",
    choices: ["True", "False"],
    answer: [2],
  },

  {
    question: "Which of the following are valid React hooks?",
    questionType: "multipleChoiceMultipleAnswers",
    choices: ["useState", "useEffect", "useContext", "useRouter"],
    answer: [1, 2, 3],
  },
];

export default react;
