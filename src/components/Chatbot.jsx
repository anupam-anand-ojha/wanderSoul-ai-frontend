import { useState } from "react";
import axios from "axios";
import { FaRobot, FaPaperPlane, FaXmark } from "react-icons/fa6";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm WanderSoul AI. How can I help you plan your trip?",
    },
  ]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/chat`,
        {
          message: userMessage.content,
          history: messages,
        }
      );

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 btn btn-circle btn-lg bg-purple-600 text-white border-none shadow-xl hover:bg-purple-700"
        >
          <FaRobot size={22} />
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] h-[500px] bg-base-100 rounded-2xl shadow-2xl border border-base-300 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-purple-600 text-white px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="font-bold">WanderSoul AI</h3>
              <p className="text-xs opacity-80">Your travel assistant</p>
            </div>

            <button onClick={() => setOpen(false)}>
              <FaXmark size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat ${
                  message.role === "user" ? "chat-end" : "chat-start"
                }`}
              >
                <div
                  className={`chat-bubble ${
                    message.role === "user"
                      ? "bg-white-600 text-white"
                      : "bg-base-200"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="chat chat-start">
                <div className="chat-bubble bg-base-200">
                  <span className="loading loading-dots loading-sm"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="p-3 border-t border-base-300 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about travel..."
              className="input input-bordered flex-1 text-white placeholder:text-white/45"
            />

            <button
              type="submit"
              disabled={loading}
              className="btn bg-purple-600 text-white border-none hover:bg-purple-700"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;