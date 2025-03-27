import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // TODO: Send user input to the backend and get a response
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;


// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Loader2 } from "lucide-react";

// export default function ChatbotUI() {
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [messages, setMessages] = useState([
//     { role: "bot", text: "Hello! Ask me anything about your documents." },
//   ]);

//   const handleSend = async () => {
//     if (!query.trim()) return;
//     setMessages([...messages, { role: "user", text: query }]);
//     setQuery("");
//     setLoading(true);

//     // Simulate API call
//     setTimeout(() => {
//       setMessages((prev) => [...prev, { role: "bot", text: "Response from AI." }]);
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold text-center mb-4">AI Document Chatbot</h1>
//       <Card className="flex-1 overflow-auto p-4 max-w-2xl mx-auto">
//         <CardContent>
//           {messages.map((msg, index) => (
//             <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
//               <span className={`px-3 py-2 rounded-lg inline-block ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
//                 {msg.text}
//               </span>
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//       <div className="flex gap-2 p-2 max-w-2xl mx-auto w-full">
//         <Input
//           type="text"
//           placeholder="Type your query..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="flex-1"
//         />
//         <Button onClick={handleSend} disabled={loading}>
//           {loading ? <Loader2 className="animate-spin" /> : "Send"}
//         </Button>
//       </div>
//     </div>
//   );
// }
