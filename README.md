🌿 MindfulSpace – Mental Wellness Web App
------------------------------------------

MindfulSpace – Mental Wellness Web App

MindfulSpace is a full-stack Mental Wellness Web Application designed to help users track their emotions, write personal reflections, and improve their mental well-being. The platform provides a calming digital space where users can monitor their mood, maintain journals, view emotional trends, and interact with an AI wellness companion. The application focuses on emotional awareness, self-reflection, and mental health support through an intuitive and responsive user interface.

🚀 Features:
😊 Emoji-based Mood Tracker Users can select their daily mood using intuitive emoji indicators.

📝 Personal Journal Users can write and save journal entries with timestamps to reflect on their emotions.

📊 Weekly Mood Trend Chart Visual representation of mood patterns across the week.

🤖 AI Wellness Companion An AI-powered chatbot that provides supportive responses using Google Gemini AI.

📈 Dashboard with Wellness Insights Displays wellness statistics and user activity in a simple dashboard.

🔐 User Authentication Secure Login and Registration system using JWT.

💾 Data Persistence User data such as moods and journal entries are stored in MongoDB Atlas.

📱 Fully Responsive Design Optimized for desktop, tablet, and mobile devices.

🛠 Tech Stack Frontend React 19 – UI Library React Router v7 – Routing Tailwind CSS – Styling Lucide React – Icons Axios – API requests Vite – Build Tool

Backend :
Node.js – Runtime Environment Express.js – Backend Framework MongoDB Atlas – Database Mongoose – ODM JWT – Authentication bcryptjs – Password Hashing Google Gemini AI – AI Chat Integration Helmet – Security Express Rate Limit – API protection CORS – Cross-origin resource sharing

Deployment :
Frontend: Vercel Backend: Render Database: MongoDB Atlas

📂 Project Structure src/ │ ├── components/ │ ├── Navbar.jsx │ ├── Chart.jsx │ ├── Footer.jsx | |── ProtectedRoute.jsx | │ ├── pages/ │ ├── Home.jsx │ ├── Mood.jsx │ ├── Journal.jsx │ ├── Chatbot.jsx │ ├── Dashboard.jsx | ├── Register.jsx | ├── Login.jsx |
│ ├── data/ │ ├── moodData.js │ ├── quotes.js │ ├── App.jsx ├── main.jsx Backend Structure backend/ │ ├── routes/ │ ├── authRoutes.js │ ├── moodRoutes.js │ ├── journalRoutes.js │ ├── affirmationRoutes.js │ ├── exercises.js ├── chatRoutes.js │ ├── models/ │ ├── User.js │ ├── Mood.js │ ├── Journal.js │ ├── server.js

⚙️ Installation & Setup 1️⃣ Clone the repository git clone https://github.com/prajaktabramhe/MentalHealthTech_backend.git git clone https://github.com/prajaktabramhe/frontend_mentalhealthtech.git 2️⃣ Install dependencies Frontend: npm install Backend: cd backend npm install 3️⃣ Environment Variables Create a .env file in the backend folder. MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_secret_key GEMINI_API_KEY=your_gemini_api_key 4️⃣ Run the project Frontend: npm run dev Backend: npm run dev

📊 How It Works Users register and log in securely using JWT authentication. Mood selections are stored in MongoDB. Journal entries are saved with timestamps. The dashboard shows emotional trends using chart visualization. The AI wellness companion responds to user messages using the Google Gemini API.

🧠 Concepts Used

React Hooks (useState, useEffect) Controlled Components Conditional Rendering Array Methods (map, reduce) REST API Integration Authentication with JWT Password Hashing with bcrypt AI API Integration Middleware in Express Secure backend practices (Helmet, Rate Limiting) Component-Based Architecture Responsive UI Design

🔮 Future Improvements

Mood analytics with AI insights Personalized mental health recommendations Mood streak tracking Push notifications for daily check-ins Therapist resource recommendations Advanced emotional trend visualization

🌐 Live Demo

Frontend: https://frontendmentalhealthtech.vercel.app/

Backend API: https://mentalhealthtech-backend.onrender.com/

👩‍💻 Author

Prajakta Bramhe Frontend Developer | React Enthusiast 
GitHub: https://github.com/prajaktabramhe 
LinkedIn: https://www.linkedin.com/in/prajakta-bramhe-862974157/
