import React, { useState, useEffect } from 'react';
import './style.css';

const Flashcard = ({ flashcard, showFront, onNext, onRating }) => {
  return (
    <div>
      {showFront ? (
		<div class="flashcard-front">
		  <div class="front-text">
			{flashcard.front} 
		  </div>
		  <div class="button-bar">
			<button class="next-button" onClick={onNext}>Show</button>
			<button class="exit-button" onClick={onNext}>Exit</button>
		  </div>
		</div>			
      ) : ( 
		<div class="flashcard-back">
		  <div class="front-text">
			{flashcard.front} 
		  </div>
		  <div class="back-text">
			{flashcard.back}
		  </div>
		  <div class="button-bar">
			<div class="rating-buttons">
			  {[1, 2, 3, 4, 5].map(rating => (
				<button key={rating} onClick={() => onRating(rating)}>
				  {rating}
				</button>
			  ))}
			</div>
		  </div>
		</div>	  
      )}
    </div>
  );
};
const FlashcardDeck = ({ deck }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);

  const handleNext = () => {
    setShowFront(false);
  };

  const handleRating = (rating) => {
    const updatedDeck = [...deck];
    updatedDeck[currentIndex].rating = rating;
    console.log('updatedDeck[currentIndex]: ', updatedDeck[currentIndex])
    setShowFront(true);
    setCurrentIndex((currentIndex + 1) % deck.length);
  };

  return (
    <div>
      <Flashcard
        flashcard={deck[currentIndex]}
        showFront={showFront}
        onNext={handleNext}
        onRating={handleRating}
      />
    </div>
  );
};


export default FlashcardDeck;
