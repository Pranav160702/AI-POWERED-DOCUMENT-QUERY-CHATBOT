import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { fetchChatResponse } from "../services/api";

const Chatbot = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");

    const handleSend = async () => {
        if (!query) return;
        const res = await fetchChatResponse(query);
        setResponse(res.answer || "No response from server");
        setQuery("");  // Clear input
    };

    return (
        <Card>
            <h2>AI Chatbot</h2>
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask something..." />
            <Button onClick={handleSend}>Send</Button>
            <p>{response}</p>
        </Card>
    );
};

export default Chatbot;
