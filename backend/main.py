from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import GenerateAPIBodyI, GenerateAPIResponseI, ReferenceDocumentsAPIResponseI
from mock_data import documents
from cache import Cache

# FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cache
cache = Cache()

# Generate AI Response API
@app.post("/generate")
async def generate_ai_response(request: GenerateAPIBodyI) -> GenerateAPIResponseI:
    query = request.query

    # Check if response exists in cache
    cached_response = await cache.get(query)
    if(cached_response):
        return GenerateAPIResponseI(response=cached_response)

    # Fake AI response
    ai_response = f"Sure! Here's a response to: '{query}'"

    # Store in cache
    await cache.set(query, ai_response)

    return GenerateAPIResponseI(response=ai_response)


# Get reference documents API
@app.get("/documents")
async def get_reference_documents() -> ReferenceDocumentsAPIResponseI:
    return ReferenceDocumentsAPIResponseI(documents=documents)
