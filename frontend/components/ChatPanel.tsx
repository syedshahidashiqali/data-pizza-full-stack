import { Dispatch, FC, SetStateAction } from "react";

interface ChatPanelPropsI {
    inputQuery: string;
    setInputQuery: Dispatch<SetStateAction<string>>;
    sendMessage: () => void;
    fetchReferences: () => void;
}
const ChatPanel: FC<ChatPanelPropsI> = ({ inputQuery, setInputQuery, sendMessage, fetchReferences }) => {
    return (
        <div className="flex mt-4 gap-2">
            <input
                type="text"
                className="flex-1 p-2 bg-gray-700 rounded-lg focus:outline-none"
                placeholder="Ask something..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
            />
            <button onClick={sendMessage} className="cursor-pointer bg-cyan-950 px-4 py-2 rounded-lg">Send</button>
            <button onClick={fetchReferences} className="cursor-pointer bg-green-950 px-4 py-2 rounded-lg">Check Reference</button>
        </div>
    );
}

export default ChatPanel;