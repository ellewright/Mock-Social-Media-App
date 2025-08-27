import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ todos }) {
    return (
        <div className={styles.todoListContainer}>
            {todos.map((todo) => (
                <Todo key={todo.id} todoId={todo.id} />
            ))}
        </div>
    );
}