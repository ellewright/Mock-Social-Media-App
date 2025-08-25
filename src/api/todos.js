const BASE_URL = `${import.meta.env.VITE_API_URL}/todos`;

export async function getAllTodos() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching all todos: ${error.message}`);
    }
}

export async function getTodo(todoId) {
    try {
        const response = await fetch(`${BASE_URL}/${todoId}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching todo with ID ${todoId}: ${error.message}`);
    }
}