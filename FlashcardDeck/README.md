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

### Run in Online IDE

Run in [Stackblitz](https://stackblitz.com/edit/react-qogbhk?file=src%2Findex.js,src%2FApp.js,src%2FFlashcardDeck.js).

### Code Explanation in Plain English
