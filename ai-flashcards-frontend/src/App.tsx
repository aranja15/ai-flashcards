// src/App.tsx
import React, { useState } from 'react';
import { fetchFlashcardsFromTopic, fetchFlashcardsFromPDF } from './services/flashcardService';
import FlashcardList from './components/FlashcardList';
import './index.css';

function App() {
  const [topic, setTopic] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    const res = await fetchFlashcardsFromTopic(topic);
    setFlashcards(res.flashcards);
    setLoading(false);
  };

  const handlePDFUpload = async () => {
    if (!file) return;
    setLoading(true);
    const res = await fetchFlashcardsFromPDF(file);
    setFlashcards(res.flashcards);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>📚 AI Flashcards</h1>
      <p>Upload a PDF or enter a topic to generate flashcards!</p>

      <input
        type="text"
        placeholder="Enter a topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="input"
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Generating...' : 'Generate from Topic'}
      </button>

      <p>or</p>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="input"
      />
      <button onClick={handlePDFUpload} disabled={loading}>
        {loading ? 'Generating...' : 'Generate from PDF'}
      </button>

      <div className="flashcard-grid">
        <FlashcardList flashcards={flashcards} />
      </div>
    </div>
  );
}

export default App;
