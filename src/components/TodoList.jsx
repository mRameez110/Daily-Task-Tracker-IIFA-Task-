import React from "react";

import ToDoItem from "./TodoItems";

const ToDoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ToDoList;
