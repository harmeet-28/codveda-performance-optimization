import { lazy, Suspense } from "react";
import useTasks from "./hooks/useTasks";

const Home = lazy(() => import("./pages/Home"));

function App() {

  const { tasks, setTasks } = useTasks();

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Home
        tasks={tasks}
        setTasks={setTasks}
      />
    </Suspense>
  );
}

export default App;