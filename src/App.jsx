import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Add Todo</h1>
          <AddTodo />
        </div>
      </div>
    </>
  );
}

export default App;
