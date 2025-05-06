import { useState } from "react";
import toast from "react-hot-toast";

const MyTaskComponent = ({ tasks, setTasks }) => {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", date: "" });

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast.success("Task deleted!");
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditForm({
      title: task.title,
      description: task.description || "",
      date: task.date || "",
    });
  };

  const handleSave = (id) => {
    if (editForm.title.trim() === "") {
      toast.error("Title cannot be empty.");
      return;
    }

    setTasks(tasks.map(task =>
      task.id === id ? { ...task, ...editForm } : task
    ));
    setEditingId(null);
    toast.success("Task updated!");
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty-state">You have no tasks. Add one above!</div>
      ) : (
        tasks.map(task => (
          <div className="task" key={task.id}>
            <div className="task-content">
              {editingId === task.id ? (
                <div style={{ flex: 1 }}>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    placeholder="Task Title"
                  />
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    placeholder="Task Description"
                  />
                  <input
                    type="date"
                    value={editForm.date}
                    onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                  />
                  <div className="task-actions">
                    <button className="edit-btn" onClick={() => handleSave(task.id)}>Save</button>
                    <button className="delete-btn" onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ flex: 1 }}>
                    <div className="task-title">{task.title}</div>
                    {task.description && <div className="task-desc">{task.description}</div>}
                    {task.date && <div className="task-date">Due: {task.date}</div>}
                  </div>
                  <div className="task-actions">
                    <button className="edit-btn" onClick={() => handleEdit(task)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyTaskComponent;
