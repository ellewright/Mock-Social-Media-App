const BASE_URL = `${import.meta.env.VITE_API_URL}/albums`;

export function getAllAlbums() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => console.log(json));
}

export function getAlbum(albumId) {
    fetch(`${BASE_URL}/${albumId}`)
        .then(response => response.json())
        .then(json => console.log(json));
}