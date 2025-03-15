from pydantic import BaseModel

# Request body model for generate API
class GenerateAPIBodyI(BaseModel):
    query: str

# Response model for generate API
class GenerateAPIResponseI(BaseModel):
    response: str


# Response model for documents API
class FactSourceI(BaseModel):
    title: str
    content: str

class ReferenceDocumentsAPIResponseI(BaseModel):
    documents: list[FactSourceI]