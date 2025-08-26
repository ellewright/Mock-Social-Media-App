import { useEffect, useState } from "react";
import { getTodo } from "../../api/todos";
import styles from "./Todo.module.css";

export default function Todo({ todoId }) {
    const [todo, setTodo] = useState({
        id: null,
        userId: null,
        title: "",
        completed: false
    });

    useEffect(() => {
        const loadTodo = async () => {
            const response = await getTodo(todoId);
            setTodo(response);
        };

        loadTodo();
    }, [todoId]);

    return todo.id !== null && (
        <div className={styles.todoContainer}>
            <h1>{todo.title}</h1>
            {todo.completed && <p>Completed</p>}
        </div>
    );
}