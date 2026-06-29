import { memo } from "react";

function TaskCard({ task, tasks, setTasks }) {
  // Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  // Toggle Complete
  function toggleComplete(id) {
    const updatedTasks = tasks.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTasks(updatedTasks);
  }

  return (
    <div className="task-card">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "gray" : "black",
          fontWeight: "500",
        }}
      >
        {task.title}
      </span>

      <div className="task-actions">
        <button
          onClick={() => toggleComplete(task.id)}
          title="Mark Complete"
        >
          ✔
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          title="Delete Task"
        >
          🗑
        </button>
      </div>
    </div>
  );
}

export default memo(TaskCard);