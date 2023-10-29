function FilterTodos() {
  return (
    <div className="mb-4">
      <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg">All</button>
      <button className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded-lg">Active</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Completed</button>
    </div>
  );
}

export default FilterTodos;
