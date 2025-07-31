# 🧠 AI Flashcards Generator

A full-stack application that lets users generate **AI-powered flashcards** by either:
- Entering a topic
- Uploading a PDF

Built using:
- 🔥 Frontend: React (TypeScript)
- 🐍 Backend: FastAPI (Python)
- 🤖 AI Model: LLaMA 3 via Ollama (runs locally)

---

## 📁 Project Structure

```
AI-FLASHCARDS/
├── ai-flashcards-backend/     # FastAPI backend with PDF parsing and AI integration
│   ├── services/              # Flashcard generation and PDF handling logic
│   ├── utils/                 # Ollama chat client (optional)
│   ├── main.py                # Entry point
│   └── requirements.txt
│
├── ai-flashcards-frontend/    # React frontend (TypeScript)
│   └── src/
│       ├── components/        # Flashcard UI components
│       ├── services/          # API calls to backend
│       └── App.tsx            # Main frontend logic
│
└── README.md
```

---

## 🧑‍💻 How to Run the Project Locally

### 🔧 Backend Setup (FastAPI + Ollama)

1. **Clone the repo and navigate to backend:**
```bash
cd ai-flashcards-backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. **Install and start Ollama locally (Mac/Linux):**
```bash
brew install ollama        # or follow instructions at https://ollama.com
ollama serve               # Terminal 1
ollama run llama3          # Terminal 2
```

3. **Run FastAPI server:**
```bash
uvicorn main:app --reload
```

By default, it runs on `http://localhost:8000`.

---

### 🎨 Frontend Setup (React + TypeScript)

1. **Navigate to frontend:**
```bash
cd ai-flashcards-frontend
npm install
npm start
```

App will be live on `http://localhost:3000`.

---

## ✅ Features

- 📤 Upload a PDF or ✏️ Enter a topic
- 🤖 Generate 5 flashcards from local LLaMA 3 model
- 📱 Click/Tap to reveal answers
- 🎯 Simple and accessible interface

---

## 🛡️ Environment Notes

- Ollama runs on port `11434`
- CORS enabled for `localhost:3000` in FastAPI
- No external API costs (uses local inference)
- No database used – session-based flashcards

---

## 🧠 Inspiration

Personal project to explore:
- LLM integration without cloud APIs
- End-to-end AI UX flow
- PDF NLP basics
