import { useState } from "react";
import { DocumentI, MessageI } from "@/types";
import MessageListing from "./MessageListing";
import ReferenceSidebar from "./ReferenceSidebar";
import { getReferencesApi, sendMessageApi } from "@/utils/api";
import ChatPanel from "./ChatPanel";

export default function ChatbotUI() {
    const [messages, setMessages] = useState<MessageI[]>([]);
    const [inputQuery, setInputQuery] = useState("");
    const [showReferences, setShowReferences] = useState(false);
    const [documents, setDocuments] = useState<DocumentI[]>([]);

    const sendMessage = async () => {
        if (!inputQuery.trim()) return;
        const userMessage = { type: "user", text: inputQuery } as MessageI;
        setMessages((prev) => [...prev, userMessage]);
        setInputQuery("");

        // api call
        const data = await sendMessageApi(inputQuery)
        setMessages((prev) => [...prev, { type: "bot", text: data }]);
    };

    const fetchReferences = async () => {
        // api call
        const data = await getReferencesApi();
        setDocuments(data);
        setShowReferences(true);
    };

    const closeReferenceSidebar = () => {
        setShowReferences(false)
    }

    return (
        <div className="flex h-screen bg-gray-900 text-white">
            {/* Chat Panel */}
            <div className="flex flex-col flex-1 p-4">
                <MessageListing messages={messages} />
                <ChatPanel
                    inputQuery={inputQuery}
                    setInputQuery={setInputQuery}
                    sendMessage={sendMessage}
                    fetchReferences={fetchReferences}
                />
            </div>
            {/* Reference Panel */}
            {showReferences && (
                <ReferenceSidebar
                    documents={documents}
                    onCloseSidebar={closeReferenceSidebar}
                />
            )}
        </div>
    );
}

