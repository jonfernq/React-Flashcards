# Flashcard Display


### Source Files

- [index.html](https://github.com/jonfernq/React-Flashcards/blob/main/DisplayFlashcards/index.html)
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


#### index.js

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```
This code file sets up the connection between the React JavaScript library and the HTML document in which your app will be rendered. The code imports the React library, the React DOM library (which is used to render React components on the web), and the App component (which contains your app's UI).

The ReactDOM.render() function is then called, which takes two arguments: the first argument is the App component, and the second argument is the HTML element in the document that the app should be rendered into (in this case, an element with an id of "root").

This code sets up the connection between your React app and the HTML document, so that your app's UI can be displayed in the web browser.


#### App.js

```
import React from "react";
import DisplayFlashcards from "./DisplayFlashcards";
import "./style.css";

const flashcards = [
  { Language: "French", Front: "I love you", Back: "Je vous aime", Rating: "" },
  { Language: "French", Front: "I love you so much", Back: "Je t'aime tellement", Rating: "" },
  { Language: "French", Front: "I love you too", Back: "Je t'aime davantage", Rating: "" },
  { Language: "French", Front: "I love you more", Back: "Je t'aime trop", Rating: "" }
];

export default function App() {
  return (
    <div>
      <DisplayFlashcards flashcards={flashcards} />
    </div>
  );
}
```

This code file sets up the main component for a React.js application. It starts by importing the necessary libraries and dependencies, including the React library, a custom component called "DisplayFlashcards", and a stylesheet called "style.css".

Next, it defines an array of flashcards data, which includes information about the language, the front of the card, the back of the card, and a rating.

Finally, it creates the main component of the application, the App function component, which returns the JSX code to render on the page. It displays the flashcards by calling the custom component "DisplayFlashcards" and passing the flashcard data as a prop. The App component is exported as the default export so it can be imported and used in other parts of the application.

#### DisplayFlashcards.js 


