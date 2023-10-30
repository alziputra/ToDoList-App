import { createSlice } from "@reduxjs/toolkit";

// Inisialisasi state awal untuk todos
const initialState = {
  todos: [
    {
      id: 1,
      text: "Belajar React",
      completed: true,
      date: new Date().toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
    },
    {
      id: 2,
      text: "Belajar Redux",
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
    },
    {
      id: 3,
      text: "Belajar React Native",
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
    },
  ],
};

// Membuat slice 'todos' menggunakan Redux Toolkit
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Aksi untuk menambahkan tugas baru ke daftar todos
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      // Simpan ke local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    // Aksi untuk menghapus tugas dari daftar todos berdasarkan ID
    removeTodo: (state, action) => {
      // Hapus todo berdasarkan ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // Simpan perubahan ke local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    // Aksi untuk mengubah status tugas (selesai/belum selesai)
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        // Simpan perubahan ke local storage
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },

    // Aksi untuk mengedit nilai tugas berdasarkan ID
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },

    // Aksi untuk mengubah filter tampilan daftar todos
    toggleFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Ekspor aksi dan reducer dari slice 'todos'
export const { addTodo, removeTodo, toggleTodo, editTodo, toggleFilter } = todosSlice.actions;

export default todosSlice.reducer;
