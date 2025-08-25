const BASE_URL = `${import.meta.env.VITE_API_URL}/comments`;

export function getAllComments() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => console.log(json));
}

export function getComment(commentId) {
    fetch(`${BASE_URL}/${commentId}`)
        .then(response => response.json())
        .then(json => console.log(json));
}