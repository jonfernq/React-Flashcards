## Multiple Choice Quiz

- A React.js Coursera-like multiple choice quiz component called MultipleChoiceQuiz.
- Takes a series of multiple choice questions in JSON format which includes the correct answer.
- Enters them into a test array.
- Writes them out to a web page with spacing between each question.
- Each question consists of: a. a numbered question, b. 4 checkbox answers identified by a letter
- At the end there is a submit button, 
- When the submit button is pressed, user answers are entered into the test array.
- Then checked against the correct answers.
- Incorrect answers are highlighted in red color on the page.
- A summary at the bottom gives the percentage of correct answers: "88%: 7 out of 8 answers correct"

### Source Files

- [index.html](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardDeck/index.html)
- [index.js](https://github.com/jonfernq/React-Flashcards/blob/main/MultipleChoiceQuiz/index.js)
- [App.js](https://github.com/jonfernq/React-Flashcards/blob/main/MultipleChoiceQuiz/App.js)
- [MultipleChoiceQuiz.js](https://github.com/jonfernq/React-Flashcards/blob/main/MultipleChoiceQuiz/MultipleChoiceQuiz.js)

### Run in Online IDE

- Run in [Stackblitz](https://stackblitz.com/edit/react-l7dtby).

### Code Explanation in Plain English

This is a React component that displays a multiple-choice quiz. The quiz takes a list of questions as a prop.

The component uses the useState hook to keep track of the answers selected by the user (selectedAnswers) and whether the quiz has been submitted (isSubmitted). When the user selects an answer, the handleAnswerChange function is called and updates the selectedAnswers state with the new answer.

When the user clicks the "Submit" button, the handleSubmit function is called and updates the isSubmitted state to true.

The correctQuiz function maps through the list of questions and generates a set of radio buttons for each question. It also highlights the selected answer in green if it's correct, or red if it's incorrect.

When the quiz has been submitted, the calculateScore function is called to calculate the user's score. It loops through the list of questions and checks whether the user's selected answer matches the correct answer. The number of correct answers is then divided by the total number of questions and multiplied by 100 to get the percentage score.

Finally, the component returns either the quiz (if it hasn't been submitted yet) or the quiz result (if it has been submitted). The quiz result displays the correct quiz and the percentage score, along with the number of correct answers out of the total number of questions.

The PropTypes module is used to specify the expected shape of the questions prop, which is an array of objects representing each question. Each question object is expected to have a question string, an options object with four string properties (A, B, C, and D), and an answer string representing the correct answer.
