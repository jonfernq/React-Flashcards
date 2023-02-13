# Flashcard Display


### Source Files

- [index.js](https://github.com/jonfernq/React-Flashcards/blob/main/DisplayFlashcards/index.js)
- [App.js](https://github.com/jonfernq/React-Flashcards/blob/main/DisplayFlashcards/App.js)
- [DisplayFlashcards.js](https://github.com/jonfernq/React-Flashcards/blob/main/DisplayFlashcards/DisplayFlashcards.js)

### Run in Online IDE

Run in [Stackblitz](https://stackblitz.com/edit/react-zcmx57?file=src%2FApp.js).

### Code Explanation in Plain English

The flow of control in a React application typically starts with the index.js file. Here's the order in which the files are called:

- 1. index.js: This file is the entry point to your React application. It sets up the rendering of the root component of your application by importing the App component from the App.js file and using ReactDOM's render method to render the root component to a target HTML element in the DOM, typically a div with an id of "root".

- 2. App.js: This file defines the root component of your application. It typically imports other components, including the DisplayFlashcards component, and renders them.

- 3. DisplayFlashcards.js: This file defines the DisplayFlashcards component, which displays the flashcards in a table. It is imported by the App.js file and used as part of the overall rendering of the application.

So in summary, the index.js file sets up the rendering of the application, the App.js file defines the root component of the application, and the DisplayFlashcards.js file defines a component used within the root component to display the flashcards.


