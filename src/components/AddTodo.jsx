import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todos";
import { AiFillPlusCircle } from "react-icons/ai";

function AddTodo() {
  // State lokal untuk menyimpan nilai input dari pengguna
  const [text, setText] = useState("");
  // mengikuti angka terakhir yang Anda miliki
  const [lastId, setLastId] = useState(3);
  const dispatch = useDispatch();

  // Handle submit form saat tombol "Add" diklik
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      const newTodo = {
        // Menambahkan properti id dengan nilai unik
        id: lastId + 1,
        text,
        completed: false,
        date: new Date().toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }),
      };
      // Menambahkan todo dengan id ke Redux state
      dispatch(addTodo(newTodo));
      // Mengosongkan input setelah menambahkan todo
      setText("");
      // Mengupdate nilai lastId
      setLastId(lastId + 1);

      // Simpan data ke localStorage
      // Mengambil daftar tugas yang sudah ada di localStorage atau membuat array kosong jika belum ada
      const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

      // Menambahkan tugas baru ke daftar tugas yang ada
      const newTodos = [...existingTodos];

      // Menyimpan daftar tugas yang diperbarui ke localStorage sebagai JSON string
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-5 mb-4">
      <input type="text" id="todo" name="todo" placeholder="What to do" className="flex-1 border-2 border-indigo-300 rounded-l-md p-2 focus:outline-none focus:border-indigo-500" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit" className="flex items-center gap-2 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-indigo-600">
        <AiFillPlusCircle />
        Add
      </button>
    </form>
  );
}

export default AddTodo;
