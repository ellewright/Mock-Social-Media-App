const BASE_URL = `${import.meta.env.VITE_API_URL}/users`;

export function getAllUsers() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => console.log(json));
}

export function getUser(userId) {
    fetch(`${BASE_URL}/${userId}`)
        .then(response => response.json())
        .then(json => console.log(json));
}