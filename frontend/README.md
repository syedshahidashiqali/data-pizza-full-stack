# Frontend - AI Chatbot with Fact-Checking

## 🚀 Overview
This is the frontend of the AI chatbot application, built using React and TypeScript. It provides a user-friendly interface to interact with the chatbot, which simulates AI-generated responses and offers fact-checking capabilities.

## 🏗 Tech Stack
- **React (Next.js)**
- **TypeScript**
- **Tailwind CSS**

---

## 📂 Project Structure
```
frontend/
│── components/       # Reusable UI components
│── pages/            # Page components
│── public/
│── package.json      # Frontend dependencies
│── Dockerfile        # Frontend Dockerfile
│── README.md         # Documentation
```

---

## 🔧 Setup & Installation

### 1️⃣ **Run with Docker (Recommended)**
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/syedshahidashiqali/data-pizza-full-stack.git
   cd data-pizza-full-stack/frontend
   ```
2. **Build and Run the Container:**
   ```sh
   docker build -t datapizza-frontend .
   docker run -d -p 3000:3000 datapizza-frontend
   ```
3. Open the app at: `http://localhost:3000`

### 2️⃣ **Alternative: Pull from Docker Hub**
Instead of building locally, you can pull the pre-built image:

* [Frontend Image](https://hub.docker.com/r/syedshahidashiqali/datapizza-frontend)

```sh
docker pull syedshahidashiqali/datapizza-frontend:latest
docker run -d -p 3000:3000 syedshahidashiqali/datapizza-frontend:latest
```

### 3️⃣ **Run Locally without Docker**
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/syedshahidashiqali/data-pizza-full-stack.git
   cd data-pizza-full-stack/frontend
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Start the Development Server:**
   ```sh
   npm run dev
   ```
4. Open the app at: `http://localhost:3000`

---

## 🎯 Features Implemented
✔️ Interactive chatbot UI  
✔️ AI response simulation  
✔️ Fact-checking with reference documents  
✔️ Responsive design using Tailwind CSS  
✔️ Dockerized frontend for easy deployment  

---

## 📜 License
This project is for **Datapizza's technical test** and is not intended for production use.

---

