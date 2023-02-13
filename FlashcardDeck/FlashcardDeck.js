import React, { useState, useEffect } from 'react';

const Flashcard = ({ flashcard, showFront, onNext, onRating }) => {
  return (
    <div>
      {showFront ? (
        <div>
          <p>{flashcard.front}</p>
          <button onClick={onNext}>Next</button>
        </div>
      ) : (
        <div>
          <p>{flashcard.back}</p>
          {[1, 2, 3, 4, 5].map(rating => (
            <button key={rating} onClick={() => onRating(rating)}>
              {rating}
            </button>
          ))}
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
