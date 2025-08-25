const BASE_URL = `${import.meta.env.VITE_API_URL}/photos`;

export function getAllPhotos() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => console.log(json));
}

export function getPhoto(photoId) {
    fetch(`${BASE_URL}/${photoId}`)
        .then(response => response.json())
        .then(json => console.log(json));
}