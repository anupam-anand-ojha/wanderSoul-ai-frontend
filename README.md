# ✈️ WanderSoul AI

> An AI-powered travel planning web application that helps users create personalized travel itineraries and explore destinations through an interactive AI assistant.

🔗 **Live Demo:** https://wandersoul-ai.vercel.app/
🔗 **Portfolio:** https://anupamanand.vercel.app/

---

## 🌍 About The Project

**WanderSoul AI** is a modern AI-powered travel planning application built with React.js.

The application allows users to:

* Explore travel destinations
* Select a destination and plan a trip with AI
* Generate personalized travel itineraries
* Chat with an AI travel assistant
* Get recommendations based on travel duration, budget, travelers, and interests

The frontend communicates with a backend API that handles AI-powered trip planning and chatbot responses.

---

## ✨ Features

### 🤖 AI Trip Planner

Generate personalized travel plans based on:

* 📍 Destination
* 🗓️ Trip duration
* 💰 Budget
* 👥 Number of travelers
* ❤️ Travel interests

The generated itinerary is displayed in a structured and easy-to-read format.

### 💬 AI Travel Assistant

Interactive AI chatbot that can help users with:

* Destination ideas
* Travel planning
* Activities
* Food recommendations
* General travel questions

The chatbot maintains recent conversation history to provide better contextual responses.

### 🗺️ Destination Exploration

Users can explore destinations and directly start planning a trip with AI.

Example flow:

```text
Explore
   ↓
Select Destination
   ↓
Plan with AI
   ↓
Trip Planning Form
   ↓
Generate Trip
   ↓
AI Trip Result
```

### ⚡ Real-Time AI Responses

The chatbot supports **Server-Sent Events (SSE)** to stream AI responses progressively instead of waiting for the complete response.

### 📱 Responsive UI

Designed to work across:

* Desktop
* Tablet
* Mobile

### 🎨 Modern UI

Built using:

* Tailwind CSS
* DaisyUI
* Responsive layouts
* Modern component-based React architecture

---

## 🛠️ Tech Stack

### Frontend

| Technology   | Purpose                  |
| ------------ | ------------------------ |
| React.js     | UI development           |
| Vite         | Development & build tool |
| React Router | Client-side routing      |
| Tailwind CSS | Styling                  |
| DaisyUI      | UI components            |
| JavaScript   | Application logic        |
| Fetch API    | Backend communication    |

### AI & Backend Integration

| Technology         | Purpose                     |
| ------------------ | --------------------------- |
| Gemini AI          | AI-powered travel planning  |
| REST API           | Trip planning communication |
| Server-Sent Events | Streaming chatbot responses |
| Render             | Backend deployment          |
| Vercel             | Frontend deployment         |

---

## 🧭 Application Routes

```text
/
├── /explore
├── /explore/:place
├── /plan
├── /trip/result
├── /trips
└── /about
```

### Main User Flow

```text
Home
 │
 ├── Explore
 │     └── Destination
 │            └── Plan with AI
 │
 └── Plan My Trip
        │
        └── Generate AI Trip
                │
                └── Trip Result
```

---

## 🤖 AI Trip Planning

The trip planner sends user preferences to the backend API.

Example request:

```json
{
  "place": "Bali",
  "duration": "5 days",
  "budget": "₹50,000",
  "travelers": 2,
  "interests": [
    "beaches",
    "adventure",
    "food"
  ]
}
```

The backend processes these preferences using Gemini AI and returns a structured travel itinerary.

---

## 💬 AI Chatbot

WanderSoul AI also includes an interactive travel chatbot.

The frontend sends:

```json
{
  "message": "What are the best things to do in Bali?",
  "history": []
}
```

The backend processes the message and streams the response using:

```text
Content-Type: text/event-stream
```

Recent conversation history is maintained on the client side to provide contextual responses.

---

## 📂 Project Structure

```text
wanderSoul-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Destination.jsx
│   │   ├── Plan.jsx
│   │   ├── TripResult.jsx
│   │   ├── Trips.jsx
│   │   └── About.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

> Folder names may vary depending on the current project structure.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/anupam-anand-ojha/wanderSoul-frontend.git
```

### 2. Navigate to the project

```bash
cd wanderSoul-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_backend_api_url
```

Example:

```env
VITE_API_URL=https://your-backend.onrender.com
```

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

| Variable       | Description          |
| -------------- | -------------------- |
| `VITE_API_URL` | Backend API base URL |

> Never commit API keys or private credentials to the repository.

---

## 🔗 API Integration

The frontend communicates with the backend through API endpoints.

### Trip Planning

```http
POST /plan/travel
```

Used to generate an AI-powered travel itinerary.

### AI Chat

```http
POST /chat
```

Used to communicate with the WanderSoul AI travel assistant.

The chatbot supports streamed responses using Server-Sent Events.

---

## 🎯 Key Engineering Highlights

* Component-based React architecture
* Client-side routing with dynamic destination routes
* AI-powered trip generation
* Gemini AI backend integration
* Server-Sent Events for streamed chatbot responses
* Conversation history handling
* Responsive design for mobile and desktop
* Environment-based API configuration
* Production deployment using Vercel

---

## 🚀 Deployment

The frontend is deployed using **Vercel**.

The backend API is deployed separately and connected through the `VITE_API_URL` environment variable.

```text
React Frontend
      │
      │ HTTP / SSE
      ▼
Backend API
      │
      ▼
Gemini AI
```

---

## 🔮 Future Improvements

* [ ] User authentication
* [ ] Save and manage generated trips
* [ ] Trip history
* [ ] Export itinerary as PDF
* [ ] Weather integration
* [ ] Maps integration
* [ ] Hotel and flight API integration
* [ ] More personalized recommendations
* [ ] Multi-language travel assistance

---

## 📸 Screenshots

Add project screenshots here:

```md
![WanderSoul Home](./screenshots/home.png)

![Trip Planner](./screenshots/planner.png)

![AI Trip Result](./screenshots/trip-result.png)

![AI Chatbot](./screenshots/chatbot.png)
```

---

## 📌 Project Status

**Active Development**

WanderSoul AI is a portfolio project focused on demonstrating modern frontend development, API integration, AI integration, responsive UI design, and real-time streaming interactions.

---

## 👨‍💻 Author

### Anupam Anand

**Full Stack Developer | MERN | AI Integration**

* Portfolio: https://anupamanand.vercel.app/
* GitHub: https://github.com/anupam-anand-ojha
* LinkedIn: https://www.linkedin.com/

---

## ⭐ Show Your Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.
