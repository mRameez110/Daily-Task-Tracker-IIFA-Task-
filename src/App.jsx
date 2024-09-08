import React from "react";
import { useSelector } from "react-redux";
import ToDoList from "./components/TodoList";
import AddToDo from "./components/AddTodo";
import useToDoActions from "./custom-hooks/useTodoActions";
import withEnhancement from "./hoc/UpdatedTodoWithHoc";

const EnhancedToDoList = withEnhancement({ PassComp: ToDoList });

function App() {
  const todos = useSelector((state) => state.todos);
  const { addTodo, toggleTodo, deleteTodo, editTodo } = useToDoActions();

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl text-center mb-20">
        <span className="bg-green-200 px-2">Daily Task Tracker</span>
      </h1>

      <AddToDo onAdd={addTodo} />
      <EnhancedToDoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
