import React from "react";

import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      Todos
      {todos.map((todo, index) => (
        <ui className="list-none" key={index}>
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}>
            <div className="text-white">{todo.text}</div>

            <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
              Delete
            </button>
          </li>
        </ui>
      ))}
    </div>
  );
};

export default Todos;
