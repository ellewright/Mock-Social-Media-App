const BASE_URL = `${import.meta.env.VITE_API_URL}/comments`;

export async function getAllComments() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching all comments: ${error.message}`);
    }
}

export async function getComment(commentId) {
    try {
        const response = await fetch(`${BASE_URL}/${commentId}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching comment with ID ${commentId}: ${error.message}`);
    }
}