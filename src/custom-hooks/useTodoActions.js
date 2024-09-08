import { useDispatch } from "react-redux";

// import {
//   addToDo,
//   toggleToDo,
//   deleteToDo,
//   editToDo,
// } from "../features/todoSlice";

import {
  addToDo,
  toggleToDo,
  deleteToDo,
  editToDo,
} from "../redux/slices/todoSlice";

const useToDoActions = () => {
  const dispatch = useDispatch();

  const addTodo = (text) => {
    dispatch(addToDo(text));
  };

  const toggleTodo = (id) => {
    dispatch(toggleToDo(id));
  };

  const deleteTodo = (id) => {
    dispatch(deleteToDo(id));
  };

  const editTodo = (id, text) => {
    dispatch(editToDo({ id, text }));
  };

  return { addTodo, toggleTodo, deleteTodo, editTodo };
};

export default useToDoActions;
