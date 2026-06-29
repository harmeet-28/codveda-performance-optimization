import { useState, useCallback } from "react";

function AddTask({ tasks, setTasks }) {
  const [input, setInput] = useState("");

  const addTask = useCallback(() => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      title: input,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  }, [input, setTasks]);

  return (
    <div className="add-task">
      <label htmlFor="taskInput">Task</label>

      <input
        id="taskInput"
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
