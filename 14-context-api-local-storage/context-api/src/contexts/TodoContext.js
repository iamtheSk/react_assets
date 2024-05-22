import { useContext, createContext } from "react";

//Step 1- Create Context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//Step 2 - Use Context pass the context
export const useTodo = () => {
  return useContext(TodoContext);
};

//Step 3 - Provider
export const TodoProvider = TodoContext.Provider;
