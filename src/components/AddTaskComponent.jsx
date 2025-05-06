import { useState } from "react";
import toast from "react-hot-toast";

const AddTaskComponent = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      toast.error("Task title is required!");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      date,
    };

    onAddTask(newTask); // send to parent
    setTitle("");
    setDescription("");
    setDate("");
    toast.success("Task added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Optional Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskComponent;
