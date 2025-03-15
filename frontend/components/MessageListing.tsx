import { MessageI } from "@/types"
import { FC } from "react";
import EmptyChatMessage from "./EmptyChatMessage";
import MessageItem from "./MessageItem";

interface MessageListingPropsI {
    messages: MessageI[],
}
const MessageListing: FC<MessageListingPropsI> = ({ messages }) => {
    return (
        <div className="flex-1 overflow-auto p-4 space-y-4 bg-gray-800 rounded-lg">
            {messages?.length === 0 && <EmptyChatMessage />}
            {messages?.length > 0 && messages?.map((message, index) => (
                <MessageItem
                    key={index}
                    message={message}
                />
            ))}
        </div>
    )
}

export default MessageListing;