import React, { useState } from "react";

const ToDoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-200 p-2 rounded mb-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="mr-2"
          />
          <button
            className="bg-green-500 text-white p-1 rounded"
            onClick={handleEdit}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div
            className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}
            style={{ flex: 1 }}
          >
            {todo.text}
          </div>
          <div className="flex gap-2">
            <button
              className={`bg-${
                todo.completed ? "green" : "blue"
              }-500 text-white p-1 rounded`}
              onClick={() => onToggle(todo.id)}
            >
              {todo.completed ? "Incomplete" : "Complete"}
            </button>
            <button
              className="bg-red-500 text-white p-1 rounded"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
            <button
              className="bg-yellow-500 text-white p-1 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
