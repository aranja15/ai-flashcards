from fastapi import FastAPI, UploadFile, File
from models import TopicRequest, FlashcardResponse
from services.flashcard_gen import generate_flashcards_from_text
from services.pdf_parser import extract_text_from_pdf
import tempfile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/flashcards/topic", response_model=FlashcardResponse)
async def flashcards_from_topic(req: TopicRequest):
    flashcards = await generate_flashcards_from_text(req.topic)
    return {"flashcards": flashcards}

@app.post("/flashcards/pdf", response_model=FlashcardResponse)
async def flashcards_from_pdf(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        contents = await file.read()
        tmp.write(contents)
        tmp_path = tmp.name

    extracted = extract_text_from_pdf(tmp_path)
    flashcards = await generate_flashcards_from_text(extracted)
    return {"flashcards": flashcards}
