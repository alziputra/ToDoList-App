import AddTodo from "./components/AddTodo";
import FilterTodos from "./components/FilterTodos";
import Todos from "./components/ListTodos";


function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md w-full">
          <h1 className="text-4xl font-bold mb-[100px] text-center">What is the plan for today</h1>
          <AddTodo />
          <FilterTodos />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
