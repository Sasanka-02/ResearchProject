from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import upload_routes

app = FastAPI(title="SpeakFree API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_routes.router, prefix="/api/v1", tags=["Component 2"])


@app.get("/")
def home():
    return {
        "message": "SpeakFree backend is running",
        "api_docs": "http://localhost:8000/docs",
        "component2_endpoint": "/api/v1/component2/analyze"
    }


@app.get("/health")
def health_check():
    return {
        "status": "ok"
    }