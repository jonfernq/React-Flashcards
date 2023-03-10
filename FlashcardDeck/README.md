## Flashcard Deck

FlashcardDeck is a React.js component that iterates through a deck of flashcards
allowing the user to provide a rating of their mastery of each flashcard
by selecting a button from 1 to 5.

- The input to the component is an array of flashcards called a deck. 
The component iterates over the objects in the array.

- Each flashcard object in this deck has a front with text, a back with text, and a rating from 1 to 5. 

- The component has two screens: the front screen and the back screen.
 
- For a given object during iteration through the objects,
the front screen is displayed first, then the back screen. 

- When the component has iterated through all objects in the array,
it begins again at the beginning. 

- The middle of each screen displays a text: front text or back text.
Along the bottom of the screen is a button bar displaying buttons.

- The front screen has a 'next' button, that when pressed displays the back screen. 

- The back screen has 5 buttons labelled 1 to 5, that when pressed
update the 'rating' field of the current object with the selected number. 

- After that, the component iterates to the next object in the array,
displaying the front screen. 

### Source Files

- [index.html](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardDeck/index.html)
- [index.js](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardDeck/index.js)
- [App.js](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardDeck/App.js)
- [FlashcardDeck.js](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardDeck/FlashcardDeck.js)

- [FlashcardDeckCSS.js](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardDeck/FlashcardDeckCSS.js) (with CSS) 
- [style.css](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardDeck/style.css) 

### Run in Online IDE

- Run in [Stackblitz](https://stackblitz.com/edit/react-qogbhk?file=src%2Findex.js,src%2FApp.js,src%2FFlashcardDeck.js) (without CSS).
- Run in [Stackblitz](https://stackblitz.com/edit/react-kxljoa) (with CSS).

### Code Explanation in Plain English

The React component implements a flashcard deck containing two components: Flashcard and FlashcardDeck.

The Flashcard component takes in three properties: flashcard, showFront, and two functions onNext and onRating. Based on the value of showFront, it returns one of two flashcards, either the front or back of a flashcard, each with different text and buttons.

The FlashcardDeck component takes in a deck of flashcards and uses two state variables: currentIndex and showFront. It uses these state variables to control the currently displayed flashcard and whether the front or back of the flashcard is displayed. The component also implements two functions, handleNext and handleRating, to control changes to the state variables. The handleNext function sets showFront to false and the handleRating function updates the rating of the current flashcard and sets showFront back to true. The component then renders the Flashcard component, passing in the currently selected flashcard, the value of showFront, and the onNext and onRating functions.

The code exports the FlashcardDeck component, making it available for use in other parts of the application.

