# 🚀 AIML Interactive Learning Platform (VIBETHON 2026)

> “Learn AI by doing, playing, and solving real-world problems.”

---

## 📌 Overview

This project is an **interactive web-based AIML learning platform** designed to make Artificial Intelligence and Machine Learning concepts **engaging, practical, and accessible**.

Instead of passive learning, our platform provides:
- 📚 Structured learning modules  
- 💻 Hands-on coding practice  
- 🎮 Gamified mini-games  
- ❓ Interactive quizzes  
- 🌍 Real-world simulations  

This platform follows the VIBETHON goal of creating an **experiential learning environment** where users can learn, practice, experiment, and engage with AIML concepts.

---

## 🎯 Key Features

### 🔐 Authentication System
- User Registration & Login
- Secure password handling
- Tracks user progress

---

### 📚 Structured Learning Modules
- Beginner → Intermediate → Advanced
- Concept explanations + examples

---

### ❓ Quiz & Assessment System
- MCQ-based quizzes
- Instant feedback & scoring

---

### 📊 Dashboard & Progress Tracking
- Progress bars
- Scores tracking
- Learning status

---

### 🎮 Gamification (Basic)
- Points system
- Leaderboard
- Engagement-driven design

---

### 🌍 Real-world Simulation (Basic)
- Example: Spam detection / ML use-case

---

## 🏗️ Project Architecture

### 📁 Folder Structure
VIBETHON-SPOT04/
│
├── Backend (Node.js + Express)
├── Frontend (React + Vite + TailwindCSS)
├── README.md


---

## ⚙️ Tech Stack

### 🖥️ Frontend
- React.js (Vite)
- Tailwind CSS
- Axios

### ⚙️ Backend
- Node.js
- Express.js
- JWT Authentication

### 🗄️ Database
- MongoDB Atlas

---

## 🔗 API Endpoints

### 🔐 Authentication
POST /api/auth/register
POST /api/auth/login


### 📚 Courses

GET /api/courses


### 📊 Progress

POST /api/progress/update
GET /api/user/progress


### ❓ Quiz

POST /api/quiz/submit
GET /api/quiz


### 🏆 Leaderboard

GET /api/leaderboard


---

## 🧠 ML Concepts Covered

- Machine Learning Basics
- Classification
- Decision Trees
- Neural Networks (basic)
- Real-world ML simulations

---

## ⚡ External APIs & Tools

- Judge0 → Code execution  
- TensorFlow.js → ML in browser  
- OpenAI API (optional) → AI tutor  

---

## 🧪 How to Run Locally

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/vibethon-aiml.git
cd vibethon-aiml

2️⃣ Setup Backend
cd server
npm install
npm start

3️⃣ Setup Frontend
cd client
npm install
npm run dev

Hackathon Strategy

This project focuses on:

Clean architecture
Working prototype
Interactive learning experience

We prioritized execution quality over feature quantity, as per hackathon guidelines.

🚀 Future Enhancements
AI Chatbot Tutor
Advanced ML Playground
Real-time multiplayer quizzes
More mini-games
👨‍💻 Team Contribution
👩‍💻 Frontend: UI/UX, React Components
👩‍💻 Backend: APIs, Database, Authentication


🏁 Conclusion

This platform transforms AIML learning into an interactive, engaging, and practical experience, making complex concepts easier to understand and apply.