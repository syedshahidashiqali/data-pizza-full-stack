const BASE_URL = "http://localhost:8000";

export const sendMessageApi = async (message: string) => {
    try {
        const response = await fetch(BASE_URL + "/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: message }),
        });

        const data = await response.json();
        return data?.response
    } catch (error) {
        console.error(`Error while sending message: ${message}`, error)
        return []
    }
}

export const getReferencesApi = async () => {
    try {
        const response = await fetch(BASE_URL + "/documents");

        const data = await response.json();
        return data?.documents
    } catch (error) {
        console.error("Error while getting references", error)
        return []
    }
}