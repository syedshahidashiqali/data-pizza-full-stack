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

## 🔧 Setup & Installation

### 1️⃣ **Run with Docker (Recommended)**
You can pull and run the pre-built image from **Docker Hub**:
* [Backend Image](https://hub.docker.com/r/syedshahidashiqali/datapizza-backend)


```sh
docker pull syedshahidashiqali/datapizza-backend:latest
docker run -d -p 8000:8000 syedshahidashiqali/datapizza-backend:latest
```

### 2️⃣ **Run Locally (Without Docker)**
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/syedshahidashiqali/data-pizza-full-stack.git
   cd data-pizza-full-stack/backend
   ```
2. **Create a Virtual Environment & Install Dependencies:**
   ```sh
   python -m venv .venv
   source .venv/Scripts/activate  # For Windows Git Bash
   pip install -r requirements.txt
   ```
3. **Run the FastAPI Application:**
   ```sh
   uvicorn main:app --reload
   ```
4. **API Documentation:** Available at `http://localhost:8000/docs`

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
This project is for **Datapizza's technical test** and is not intended for production use.

---

