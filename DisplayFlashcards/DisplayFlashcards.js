import React from 'react';

const DisplayFlashcards = (props) => {
  const { flashcards } = props;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Language</th>
          <th>Front</th>
          <th>Back</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {flashcards.map((flashcard, index) => (
          <tr key={index}>
            <td>{flashcard.Language}</td>
            <td>{flashcard.Front}</td>
            <td>{flashcard.Back}</td>
            <td>{flashcard.Rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayFlashcards;
