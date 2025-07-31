// src/services/flashcardService.ts

export async function fetchFlashcardsFromTopic(topic: string) {
  const res = await fetch('http://localhost:8000/flashcards/topic', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
  });
  return await res.json();
}

export async function fetchFlashcardsFromPDF(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch('http://localhost:8000/flashcards/pdf', {
    method: 'POST',
    body: formData,
  });
  return await res.json();
}
