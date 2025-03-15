import { MessageI } from "@/types"
import { FC } from "react";

interface MessageItemPropsI {
    message: MessageI,
}
const MessageItem: FC<MessageItemPropsI> = ({ message }) => {
    return (
        <div
            className={`p-3 rounded-lg max-w-xs ${message?.type === "user" ? "ml-auto bg-gray-900" : "mr-auto bg-gray-700"}`}
        >
            {message?.text}
        </div>
    )
}

export default MessageItem;