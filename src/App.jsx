import { useEffect, useState } from 'react';
import './App.css';
import { getAllTodos } from "./api/todos";
import Todo from './components/Todo/Todo/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await getAllTodos();
      setTodos(response);
    };

    load();
  })

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todoId={todo.id} />
      ))}
    </>
  );
}

export default App;