import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [toast, setToast] = useState(null);

const showToast = (message, type) => {
  setToast({ message, type });

  setTimeout(() => {
    setToast(null);
  }, 2000);
};


  const [text, setText] = useState("");

  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const add = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { text: text.trim(), completed: false }]);
    setText("");
    showToast("Task aggiunta", "success");
  };

  const removeTodo = (indexToRemove) => {
    setTodos((prev) => prev.filter((_, index) => index !== indexToRemove));
    showToast("Task eliminata", "error");
  };

  const toggleTodo = (indexToToggle) => {
    setTodos((prev) =>
      prev.map((todo, index) =>
        index === indexToToggle
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
  };

  return (
    <div className="relative bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-137.5 rounded-xl">
      {/* TITLE and IMAGE */}
      <div className="flex items-center mt-7 gap-2">
        <img
          className="w-8"
          src={`${import.meta.env.BASE_URL}todo_icon.png`}
          alt="icon-todo"
        />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* INPUT  */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add your task..."
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button
          onClick={add}
          className="cursor-pointer border-none rounded-full bg-orange-600 w-28 h-14 text-white text-lg font-medium"
        >
          ADD +
        </button>
      </div>

      {/* TODO LIST */}
      <div>
        {todos.map((todo, index) => (
          <TodoItems
            key={index}
            todo={todo}
            remove={() => removeTodo(index)}
            onToggle={() => toggleTodo(index)}
          />
        ))}
      </div>

  {toast && (
  <div
    className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg text-sm text-white
    ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
  >
    {toast.message}
  </div>
)}


    </div>
  );
};

export default Todo;
