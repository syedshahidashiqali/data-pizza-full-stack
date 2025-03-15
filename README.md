# Full Stack AI Chatbot with Fact-Checking

## 🚀 Overview
This is a full-stack application that allows users to interact with a chatbot that simulates generative AI responses. It includes a fact-checking feature that retrieves reference documents for comparison.

## 🏗 Tech Stack
### **Frontend:**
- React
- TypeScript
- Tailwind CSS

### **Backend:**
- Python
- FastAPI
- AsyncIO (for caching and concurrency)

### **Containerization:**
- Docker
- Docker Compose

---

## 📂 Project Structure
```
project-root/
│── backend/
│   │── main.py         # FastAPI app with endpoints
│   │── models.py       # Reusable models for API endpoints
│   │── cache.py        # Async cache implementation
│   │── Dockerfile      # Backend Dockerfile
│── frontend/
│   │── pages/
│   │── components/
│   │── public/
│   │── package.json    # Frontend dependencies
│   │── Dockerfile      # Frontend Dockerfile
│── docker-compose.yml  # Docker Compose file
│── README.md           # Documentation
```

---

## 🔧 Setup & Installation

### 1️⃣ **Using Docker (Recommended)**
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/syedshahidashiqali/data-pizza-full-stack.git
   cd data-pizza-full-stack
   ```
2. **Start the Services:**
   ```sh
   docker-compose up --build
   ```
3. The application will be available at:
   - **Frontend:** http://localhost:3000
   - **Backend:** http://localhost:8000/docs (Swagger API docs)

### 2️⃣ **Alternative: Pulling from Docker Hub**
Instead of building locally, you can pull pre-built images from **Docker Hub**:

* [Frontend Image Docker Hub URL](https://hub.docker.com/repository/docker/syedshahidashiqali/datapizza-frontend)
* [Backend Image Docker Hub URL](https://hub.docker.com/repository/docker/syedshahidashiqali/datapizza-backend)

```sh
# Pull the backend and frontend images
docker pull syedshahidashiqali/datapizza-backend:latest

docker pull syedshahidashiqali/datapizza-frontend:latest

# Run the backend
docker run -d -p 8000:8000 syedshahidashiqali/datapizza-backend:latest

# Run the frontend
docker run -d -p 3000:3000 syedshahidashiqali/datapizza-frontend:latest
```


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
- **Caching:**
  - If the same query is requested again, it returns the cached response.
  - Uses `asyncio.sleep(2)` to simulate AI response time.

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

## 🛠 Features Implemented
✔️ Chatbot with simulated AI responses  
✔️ Async caching for performance  
✔️ Fact-checking feature with document retrieval  
✔️ Fully containerized using Docker  
✔️ React-based frontend with a chatbot UI  

---

## 📜 License
This project is for **Datapizza's technical test** and is not intended for production use.

---