import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const Todo = () => {
  //to control array of todo item
  const [todos, setTodos] = useState([]);

  // making object of single todoitem

  const handleAddTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: Date.now() + text + Math.random(),
    };

    //new item is added to array by spread operator
    const newTodoList = [...todos, newItem];

    // control settodos
    setTodos(newTodoList);
  };

  const handleToggle = (id) => {
    const updateAfterToggle = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updateAfterToggle);
  };

  const handleDelete = (id) => {
    const deleteTodoItem = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodoItem);
  };
  // dom
  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <div className="container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            status={todo.status}
            id={todo.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
