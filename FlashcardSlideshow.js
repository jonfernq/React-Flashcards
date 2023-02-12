// FlashcardSlideshow.js - 

import React, { useState } from 'react';

const FlashcardSlideshow = ({ deck }) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(!flipped);
    if (!flipped) {
      return;
    }
    setIndex((index + 1) % deck.length);
    setFlipped(false);
  };

  const currentCard = deck[index];

  return (
    <div>
      <div>{currentCard.front}</div>
      {flipped && <div>{currentCard.back}</div>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default FlashcardSlideshow;

/*
Write a react.js component that iterates through a deck of flashcards
in a similar fashion to a slide show. 
An array of flashcards is called a deck.
Each flashcard object has a front and a back which are text.
The middle of the component displays text
and a 'next' button is located at the bottom of the component.
The component begins by displaying the text of the front of a card.
When next is clicked, the text of the back of the card is displayed,
clicked again it moves on to the next card in the array, 
displaying the front and then back, and then the next card, and so on.
At the end of the array, it loops back to the first card. 
*/ 
