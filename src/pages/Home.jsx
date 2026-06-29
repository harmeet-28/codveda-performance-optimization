import Navbar from "../components/Navbar";
import AddTask from "../components/AddTask";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import TaskList from "../components/TaskList";
import Footer from "../components/Footer";

function Home({ tasks, setTasks }) {
  return (
    <>
      <Navbar />

      <main className="container">
        <h1>MotionTask</h1>

        <h2>Manage Your Daily Tasks</h2>

        <AddTask />

        <SearchBar />

        <FilterButtons />

        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>

      <Footer />
    </>
  );
}

export default Home;
