import { useDispatch } from "react-redux";
import { toggleFilter } from "../redux/reducers/todos";

function FilterTodos() {
  const dispatch = useDispatch();

  // Function untuk menangani filter yang diklik dan mengirimkan aksi toggleFilter ke Redux
  const handleFilter = (filter) => {
    // Mengirim aksi toggleFilter dengan argumen filter
    dispatch(toggleFilter(filter)); 
  };

  return (
    <div className="mb-4 mt-12">
      {/* Tombol untuk menampilkan semua tugas */}
      <button onClick={() => handleFilter("all")} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
        All
      </button>
      {/* Tombol untuk menampilkan tugas yang aktif */}
      <button onClick={() => handleFilter("active")} className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded-lg">
        Active
      </button>
      {/* Tombol untuk menampilkan tugas yang sudah selesai */}
      <button onClick={() => handleFilter("completed")} className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Completed
      </button>
    </div>
  );
}

export default FilterTodos;