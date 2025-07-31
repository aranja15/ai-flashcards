import httpx

OLLAMA_URL = "http://localhost:11434/api/chat"

async def query_ollama(prompt: str):
    payload = {
        "model": "llama3:latest",  # or use the name of the model you pulled (like "llama3:8b")
        "messages": [
            {"role": "user", "content": f"Generate flashcards based on this text:\n\n{prompt}"}
        ]
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(OLLAMA_URL, json=payload)
            response.raise_for_status()
            return response.json()["message"]["content"]
    except httpx.HTTPStatusError as e:
        print("❌ HTTP error:", e.response.status_code, e.response.text)
        raise
    except Exception as e:
        print("❌ General error:", e)
        raise
