const BASE_URL = `${import.meta.env.VITE_API_URL}/users`;

export async function getAllUsers() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching all users: ${error.message}`);
    }
}

export async function getUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching user with ID ${userId}: ${error.message}`);
    }
}