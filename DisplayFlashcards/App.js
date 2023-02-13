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
