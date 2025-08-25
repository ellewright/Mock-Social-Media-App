const BASE_URL = `${import.meta.env.VITE_API_URL}/posts`;

export async function getAllPosts() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching all posts: ${error.message}`);
    }
}

export async function getPost(postId) {
    try {
        const response = await fetch(`${BASE_URL}/${postId}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching post with ID ${postId}: ${error.message}`);
    }
}