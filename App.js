import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // Stores all tasks
  const [input, setInput] = useState(""); // Stores input value
  const [editIndex, setEditIndex] = useState(null); // Stores index of task being edited

  // ✅ Add Task (Create)
  const addTask = () => {
    if (input.trim() === "") return;
    
    if (editIndex !== null) {
      // If editing, update task instead of adding new one
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? input : task
      );
      setTasks(updatedTasks);
      setEditIndex(null); // Reset edit mode
    } else {
      setTasks([...tasks, input]); // Add new task
    }
    
    setInput(""); // Clear input field
  };

  // ✅ Edit Task (Update)
  const editTask = (index) => {
    setInput(tasks[index]); // Set input value to selected task
    setEditIndex(index); // Set edit mode
  };

  // ✅ Delete Task (Delete)
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>
      
      {/* Input Field & Add Button */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>{editIndex !== null ? "Update" : "Add"}</button>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>✏️ Edit</button>
            <button onClick={() => deleteTask(index)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
