import React, { useState } from "react";

const AddToDo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="flex mb-4 text-center justify-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new Task"
        className="p-2 border rounded-l"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-r"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddToDo;
