const BASE_URL = `${import.meta.env.VITE_API_URL}/albums`;

export async function getAllAlbums() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching all albums: ${error.message}`);
    }
}

export async function getAlbum(albumId) {
    try {
        const response = await fetch(`${BASE_URL}/${albumId}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching album with ID ${albumId}: ${error.message}`);
    }
}