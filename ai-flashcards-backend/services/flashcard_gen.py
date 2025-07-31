import httpx
import re

async def generate_flashcards_from_text(text: str):
    prompt = f"""Generate exactly 5 short flashcards on the topic "{text}". 
Use this format:

Q: <question>
A: <answer>

Keep the answers concise."""

    try:
        async with httpx.AsyncClient(timeout=15.0) as client:  # Optional: shorter timeout
            response = await client.post(
                "http://localhost:11434/api/generate",
                json={"model": "llama3:latest", "prompt": prompt, "stream": False}
            )
            response.raise_for_status()
            result = response.json()["response"]

            # Robust QA extraction
            qa_pairs = re.findall(r"Q:\s*(.*?)\nA:\s*(.*?)(?=\nQ:|\Z)", result, re.DOTALL)
            flashcards = [{"question": q.strip(), "answer": a.strip()} for q, a in qa_pairs]

            return flashcards

    except Exception as e:
        print("Ollama Error:", e)
        return [{"question": "Error", "answer": str(e)}]
