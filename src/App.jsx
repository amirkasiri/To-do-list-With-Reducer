import React, { useReducer, useState } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [...todos, action.payload];
    case "REMOVE":
      return todos.filter((todo, index) => index !== action.payload);
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo) {
      alert("Please enter a task.");
      return;
    }
    dispatch({ type: "ADD", payload: newTodo });
    setNewTodo("");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">To Do List</h2>

        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a task"
            className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-l"
          />
          <button
            className=" bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-200 p-2 rounded mb-2"
            >
              <span>{todo}</span>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: index })}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
