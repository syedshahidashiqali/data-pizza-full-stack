# Backend - AI Chatbot with Fact-Checking

## 🚀 Overview
This is the backend service for the **Full Stack AI Chatbot with Fact-Checking**. It is built using **FastAPI** and provides API endpoints for chatbot responses and fact-checking document retrieval.

## 🏗 Tech Stack
- **Backend:** FastAPI, Python, AsyncIO
- **Caching:** In-memory async cache
- **Containerization:** Docker

---

## 📂 Project Structure
```
backend/
│── main.py          # FastAPI app with endpoints
│── models.py        # Reusable models for API endpoints
│── cache.py         # Async cache implementation
│── Dockerfile       # Backend Dockerfile
│── requirements.txt # Python dependencies
```

---

## 🎯 API Endpoints

### **1. Generate Chatbot Response**
- **Endpoint:** `POST /generate`
- **Input:**
  ```json
  { "query": "What is Datapizza?" }
  ```
- **Response:**
  ```json
  { "response": "Datapizza is an amazing company!" }
  ```
- **Caching:** Responses are cached to improve performance.

### **2. Get Fact-Checking Documents**
- **Endpoint:** `GET /documents`
- **Response:**
  ```json
  {
    "documents": [
      { "title": "Doc 1", "content": "This is a reference paragraph..." }
    ]
  }
  ```

---

## 📜 License
This project is for **DataPizza's technical test** and is not intended for production use.

---

