import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "../redux/reducers/todos";

function ListTodos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id, text) => {
    const newText = prompt("Edit Todo", text);
    if (newText !== null) {
      dispatch(editTodo({ id, text: newText }));
    }
  };

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center bg-gray-200 p-2 rounded-md">
          <span onClick={() => handleToggle(todo.id)} className={`cursor-pointer flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}>
            {todo.text}
          </span>
          <div className="space-x-2">
            <button onClick={() => handleEdit(todo.id, todo.text)} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600">
              Edit
            </button>
            <button onClick={() => handleRemove(todo.id)} className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600">
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListTodos;