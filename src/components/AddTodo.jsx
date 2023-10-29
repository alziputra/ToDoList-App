import React from "react";

function AddTodo() {
  return (
        <form className="flex items-center gap-5 mb-4">
          <input
            type="text"
            id="todo"
            name="todo"
            className="flex-1 border-2 border-indigo-300 rounded-l-md p-2 focus:outline-none focus:border-indigo-500"
          />
          <button type="submit" className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-indigo-600">
            Add
          </button>
        </form>
  );
}

export default AddTodo;
