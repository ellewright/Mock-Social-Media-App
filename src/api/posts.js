const BASE_URL = `${import.meta.env.VITE_API_URL}/posts`;

export function getAllPosts() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => console.log(json));
}

export function getPost(postId) {
    fetch(`${BASE_URL}/${postId}`)
        .then(response => response.json())
        .then(json => console.log(json));
}