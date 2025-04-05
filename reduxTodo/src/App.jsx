import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-lg text-3xl">
        Redux Todo
      </h1>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
