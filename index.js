import React from 'react';
import { createRoot } from 'react-dom/client';
import FlashcardSlideshow from './FlashcardSlideshow';

const deck = [
  { front: "I love you", back: "Je vous aime", rating: null },
  { front: "I love you so much", back: "Je t'aime tellement", rating: null },
  { front: "I love you too", back: "Je t'aime davantage", rating: null },
  { front: "I love you more", back: "Je t'aime trop", rating: null }
];

createRoot(document.getElementById('root')).render(<FlashcardSlideshow deck={deck} />);
