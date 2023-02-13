import React from 'react';
import FlashcardDeck from './FlashcardDeck';

const flashcards = [
  { front: 'What is the capital of France?', back: 'Paris', rating: null },
  { front: 'What is the capital of Germany?', back: 'Berlin', rating: null },
  { front: 'What is the capital of Italy?', back: 'Rome', rating: null },
];

function App() {
  return (
    <div className="App">
      <FlashcardDeck deck={flashcards} />
    </div>
  );
}

export default App;

