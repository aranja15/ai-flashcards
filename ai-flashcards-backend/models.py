from pydantic import BaseModel
from typing import List

class TopicRequest(BaseModel):
    topic: str

class Flashcard(BaseModel):
    question: str
    answer: str

class FlashcardResponse(BaseModel):
    flashcards: List[Flashcard]
