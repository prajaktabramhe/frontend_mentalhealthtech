🌿 MindfulSpace – Mental Wellness Web App
------------------------------------------

MindfulSpace is a React-based Mental Wellness Web Application designed to help users track their emotions, write reflections, and monitor their mental well-being in a simple and calming digital space.
The app focuses on emotional awareness through mood tracking, journaling, visual trends, and a wellness AI companion interface.

🚀 Features:
------------
😊 Emoji-based Mood Tracker
📝 Journal with timestamped entries
📊 Custom Weekly Mood Trend Chart
🤖 AI Wellness Companion (Chatbot UI) (Currently Mock data)
📈 Dashboard with wellness statistics
📱 Fully Responsive Navigation Bar
💾 Data persistence using localStorage

🛠 Tech Stack
-----------------
React 19 – UI Library
React Router v7 – Routing
Tailwind CSS – Styling
Lucide React – Icons
Vite – Build Tool
localStorage – Data Persistence


📂 Project Structure
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Chart.jsx
      ├── Footer.jsx
 
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Mood.jsx
 │    ├── Journal.jsx
 │    ├── Chatbot.jsx
 │    ├── Dashboard.jsx
 │
 ├── data/
 │    ├── moodData.js
 │    ├── quotes.js
 │
 ├── App.jsx
 ├── main.jsx

 
⚙️ Installation & Setup
-------------------------
Install Vite, React, React Router DOM, and Tailwind CSS.

Run the appliction using command: 
npm run dev


📊 How It Works
Mood and journal entries are stored using localStorage
Data is retrieved on component mount using useEffect
Lists are rendered dynamically using map()
Navigation is handled using React Router

🧠 Concepts Used
React Hooks (useState, useEffect)
Controlled Components
Conditional Rendering
Array Methods (map, spread operator)
State Immutability
Dynamic Styling
Component-Based Architecture
Responsive UI Design

🔮 Future Improvements
Backend integration (API + Node.js + Database)
Authentication system
Real AI API integration
Dynamic average mood calculation using reduce()
User streak tracking logic

👩‍💻 Author
Prajakta Bramhe
Frontend Developer | React Enthusiast
