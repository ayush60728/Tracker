import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Chatwindow() {
  const [messages, setMessages] = useState([
    { role: "model", parts: [{ text: "Hi, How are you" }] },
    { role: "user", parts: [{ text: "Hi, im good" }] },
  ]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSubmit = async (data) => {
    // ✅ Build the updated messages array first
    const updatedMessages = [
      ...messages,
      { role: "user", parts: [{ text: data.message }] },
    ];

    setMessages(updatedMessages); // ✅ update UI
    reset();

    try {
      const response = await axios.post("http://localhost:3000/api/chat",
        { messages: updatedMessages },
        { withCredentials: true });

      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: response.data.message }],
        },
      ]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "model", parts: [{ text: "Sorry, I encountered an error" }] },
      ]);
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white">
      {/* messages */}
      <div className="h-full overflow-y-auto p-4 space-y-4 pb-24">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg ${msg.role === "user" ? "bg-blue-600" : "bg-gray-700"
                }`}
            >
              <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* input fixed at bottom */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 border-t border-white"
      >
        <div className="flex items-center gap-2 w-full">
          <input
            {...register("message", { required: true })}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
            disabled={!!errors.message}
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chatwindow;