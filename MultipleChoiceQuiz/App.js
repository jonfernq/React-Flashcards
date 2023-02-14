import React from "react";
import MultipleChoiceQuiz from "./MultipleChoiceQuiz";

const questions = [
  {
    question: "What is the capital of France?",
    options: { A: "London", B: "Berlin", C: "Madrid", D: "Paris" },
    answer: "D",
  },
  {
    question: "What is the capital of Germany?",
    options: { A: "Paris", B: "Berlin", C: "Rome", D: "Amsterdam" },
    answer: "B",
  },
  {
    question: "What is the capital of Italy?",
    options: { A: "Athens", B: "Brussels", C: "Rome", D: "Lisbon" },
    answer: "C",
  },
];

function App() {
  return (
    <div className="App">
      <MultipleChoiceQuiz questions={questions} />
    </div>
  );
}

export default App;
