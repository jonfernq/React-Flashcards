import React, { useState } from "react";
import PropTypes from "prop-types";

function MultipleChoiceQuiz({ questions }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (event, questionIndex) => {
    const selectedOption = event.target.value;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: selectedOption,
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    let numCorrect = 0;
    const correctedAnswers = questions.map((question, index) => {
      const isCorrect = selectedAnswers[index] === question.answer;
      return isCorrect;
    });
    numCorrect = correctedAnswers.filter((item) => item).length;
    return ((numCorrect / questions.length) * 100).toFixed(0);
  };

  const correctQuiz = () => {
    return questions.map((question, index) => {
      const selectedOption = selectedAnswers[index];
      const isCorrect = selectedOption === question.answer;
      const correctedAnswers = { ...selectedAnswers, [index]: isCorrect };
      const optionStyle = isCorrect ? {} : { color: "red" };
      return (
        <div key={index}>
          <h3>{question.question}</h3>
          <div>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="A"
                onChange={(event) => handleAnswerChange(event, index)}
                checked={selectedOption === "A"}
              />
              <span style={optionStyle}>{question.options.A}</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="B"
                onChange={(event) => handleAnswerChange(event, index)}
                checked={selectedOption === "B"}
              />
              <span style={optionStyle}>{question.options.B}</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="C"
                onChange={(event) => handleAnswerChange(event, index)}
                checked={selectedOption === "C"}
              />
              <span style={optionStyle}>{question.options.C}</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="D"
                onChange={(event) => handleAnswerChange(event, index)}
                checked={selectedOption === "D"}
              />
              <span style={optionStyle}>{question.options.D}</span>
            </label>
          </div>
        </div>
      );
    });
  };

  if (isSubmitted) {
    return (
      <div>
        <h2>Quiz Result</h2>
        {correctQuiz()}
        <p>{`${calculateScore()}%: ${questions.reduce(
          (acc, question, index) =>
            selectedAnswers[index] === question.answer ? acc + 1 : acc,
          0
        )} out of ${questions.length} answers correct`}</p>
      </div>
    );
  }

  return (
    <div>
      {correctQuiz()}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

 

MultipleChoiceQuiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.shape({
        A: PropTypes.string.isRequired,
        B: PropTypes.string.isRequired,
        C: PropTypes.string.isRequired,
        D: PropTypes.string.isRequired,
      }).isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MultipleChoiceQuiz;


       
