// src/components/Flashcard.tsx
import React, { useState } from 'react';
import { Flashcard } from '../types';

interface Props {
  card: Flashcard;
}

const FlashcardComponent: React.FC<Props> = ({ card }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
      <p><strong>Q:</strong> {card.question}</p>
      <p className="reveal">
        {showAnswer ? <strong>A:</strong> : 'Tap to reveal'}
      </p>
      {showAnswer && <p>{card.answer}</p>}
    </div>
  );
};

export default FlashcardComponent;
