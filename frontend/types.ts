export interface DocumentI {
    title: string;
    content: string;
}

export interface MessageI {
    text: string;
    type: "user" | "bot";
}