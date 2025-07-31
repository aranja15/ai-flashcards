// src/components/FlashcardList.tsx
import React from 'react';
import FlashcardComponent from './Flashcard';
import { Flashcard } from '../types';

interface Props {
  flashcards: Flashcard[];
}

const FlashcardList: React.FC<Props> = ({ flashcards }) => (
  <>
    {flashcards.map((card, index) => (
      <FlashcardComponent key={index} card={card} />
    ))}
  </>
);

export default FlashcardList;
