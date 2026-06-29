import { useMemo } from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, setTasks }) {

  const taskList = useMemo(() => {
    return tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
      />
    ));
  }, [tasks, setTasks]);

  return (
    <div className="task-list">
      {taskList}
    </div>
  );
}

export default TaskList;