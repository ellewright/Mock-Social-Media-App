const BASE_URL = `${import.meta.env.VITE_API_URL}/photos`;

export async function getAllPhotos() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching all photos: ${error.message}`);
    }
}

export async function getPhoto(photoId) {
    try {
        const response = await fetch(`${BASE_URL}/${photoId}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching photo with ID ${photoId}: ${error.message}`);
    }
}