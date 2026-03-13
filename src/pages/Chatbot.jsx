import { useEffect, useState, useRef } from "react";
import axios from "axios";

const Chatbot = () => {
const API = import.meta.env.VITE_API_URL;
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Load chat history when page loads
  useEffect(() => {
    const savedChat = localStorage.getItem("chatHistory");
    if (savedChat) {
      setChat(JSON.parse(savedChat));
    }
  }, []);

  // Auto scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message
    };

    const updatedChat = [...chat, userMessage];

    setChat(updatedChat);
    setMessage("");
    setLoading(true);

    try {

      const res = await axios.post(
        `${API}/api/chat`,
        { message: userMessage.text }
      );

      const aiMessage = {
        sender: "ai",
        text: res.data.response
      };

      const finalChat = [...updatedChat, aiMessage];

      setChat(finalChat);

      // Save chat to localStorage
      localStorage.setItem("chatHistory", JSON.stringify(finalChat));

    } catch (error) {

      const errorMessage = {
        sender: "ai",
        text: "The AI is taking a moment. Please try again."
      };

      const finalChat = [...updatedChat, errorMessage];

      setChat(finalChat);

      localStorage.setItem("chatHistory", JSON.stringify(finalChat));
    }

    setLoading(false);
  };
  const clearChat = () => {
  localStorage.removeItem("chatHistory");
  setChat([]);
};

  return (

    <div className="min-h-screen bg-[#f3f6f4] p-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        AI Wellness Companion
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        {/* Chat Window */}

        <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">

          {chat.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>

            </div>

          ))}

          {loading && (
            <p className="text-gray-500 text-sm">
              Companion is typing...
            </p>
          )}

          <div ref={chatEndRef}></div>

        </div>

        {/* Input Section */}

        <div className="flex gap-3">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1 border p-2 rounded-lg"
            placeholder="Talk to your companion..."
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className={`px-4 rounded-lg text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={clearChat}
            className="text-sm text-red-500 hover:text-red-700 underline"
          >
            Clear Chat
          </button>
        </div>
      </div>

    </div>

  );
};

export default Chatbot;