const BASE_URL = `${import.meta.env.VITE_API_URL}/todos`;

export function getAllTodos() {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => console.log(json));
}

export function getTodo(todoId) {
    fetch(`${BASE_URL}/${todoId}`)
        .then(response => response.json())
        .then(json => console.log(json));
}
