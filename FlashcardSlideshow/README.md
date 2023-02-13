## Flashcard Slideshow

A react.js component that iterates through a deck of flashcards in a similar fashion to a slide show. 

- An array of flashcards is called a deck.
- Each flashcard object has a front and a back which are text.
- The middle of the component displays text
and a 'next' button is located at the bottom of the component.
- The component begins by displaying the text on the front of a card.
- When 'next' is clicked, the text of the back of the card is displayed.
- When it is clicked again it moves on to the next card in the array,  
- displaying the front and then back, and then the next card, and so on.
- At the end of the array, it loops back to the first card. 

### Source Files

- [Index.js](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardSlideshow/index.js)
- [FlashcardSlideshow.js](https://github.com/jonfernq/React-Flashcards/blob/main/FlashcardSlideshow/FlashcardSlideshow.js)

### Run in Online IDE

Run in [Stackblitz](https://stackblitz.com/edit/react-21pxep?file=src%2FFlashcardSlideshow.js).

### Code Explanation in Plain English

The code defines a React component called FlashcardSlideshow that displays a slideshow of flashcards. Here's a step-by-step explanation of how it works:

The component is passed a prop called deck which is an array of flashcard objects, each with a front and a back property.

The component uses the useState hook to manage its state. The hook initializes two state variables: index and flipped. index is set to 0, which is the first card in the deck, and flipped is set to false, meaning the front of the card is displayed.

The component defines a function called handleNext that changes the state of the component when the "Next" button is clicked. The function toggles the value of flipped using setFlipped(!flipped) which changes the value of flipped to the opposite of its current value. If flipped is false, the function immediately returns without doing anything else. If flipped is true, the function updates the value of index by incrementing it by 1 and using the modulus operator (%) to ensure that it stays within the bounds of the deck array. Finally, the function sets flipped back to false.

The component uses destructuring assignment to create a constant currentCard equal to the card at the current index in the deck array.

The component returns a div containing three parts:

The front of the current card, obtained from currentCard.front.
The back of the current card, obtained from currentCard.back, only if flipped is true. This is achieved using a conditional operator that only renders the back of the card if flipped is true.
A "Next" button that calls the handleNext function when clicked.
Finally, the component is exported so that it can be used in other parts of the application.

This component allows users to iterate through a deck of flashcards in a similar fashion to a slide show, displaying the front of each card first, and then the back when the "Next" button is clicked. When the last card is reached, the component loops back to the first card.

