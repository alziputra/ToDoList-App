import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo, editTodo } from "../redux/reducers/todos";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

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
    <ul className="grid grid-cols-1 gap-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center bg-gray-200 p-2 rounded-md">
          <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} className="mr-2 h-6 w-6 text-indigo-600 rounded focus:ring-indigo-500" />
          <div className="flex w-full">
            <div className="flex flex-col w-full">
              <span onClick={() => handleToggle(todo.id)} className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}>
                {todo.text}
              </span>
              <span className="text-[12px] text-gray-500">{todo.date}</span>
            </div>
            <div className="flex gap-2">
              <button title="Edit" onClick={() => handleEdit(todo.id, todo.text)} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600">
                <AiOutlineEdit />
              </button>
              <button title="Delete" onClick={() => handleRemove(todo.id)} className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600">
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListTodos;
