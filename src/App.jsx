import { useState } from "react";
import AddTaskComponent from "./components/AddTaskComponent";
import MyTaskComponent from "./components/MyTaskComponent";
import NavbarComponent from "./components/NavbarComponent";
import { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Toaster />
      <NavbarComponent />
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="bg-[#2a2a2a] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Add a New Task</h2>
          <AddTaskComponent onAddTask={addTask} />
        </div>
        <div className="bg-[#2a2a2a] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">My Tasks</h2>
          <MyTaskComponent tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
