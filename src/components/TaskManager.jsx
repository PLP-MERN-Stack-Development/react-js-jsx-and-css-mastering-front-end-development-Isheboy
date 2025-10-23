import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Trash2, Check, Plus, ListTodo } from "lucide-react";

/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTask, deleteTask };
};

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText("");
  };

  const activeTasks = tasks.filter((task) => !task.completed).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListTodo className="h-6 w-6" />
          Task Manager
        </CardTitle>
        <CardDescription>
          Organize your tasks and stay productive
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Task input form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </form>

        {/* Filter buttons */}
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All ({tasks.length})
          </Button>
          <Button
            variant={filter === "active" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("active")}
          >
            Active ({activeTasks})
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("completed")}
          >
            Completed ({tasks.length - activeTasks})
          </Button>
        </div>

        {/* Task list */}
        <div className="space-y-2">
          {filteredTasks.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No tasks found</p>
              <p className="text-sm mt-1">Add a task to get started!</p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-colors ${
                      task.completed
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-input hover:border-primary"
                    }`}
                    aria-label={
                      task.completed ? "Mark as incomplete" : "Mark as complete"
                    }
                  >
                    {task.completed && <Check className="h-3 w-3" />}
                  </button>
                  <span
                    className={`flex-1 ${
                      task.completed ? "line-through text-muted-foreground" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteTask(task.id)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  aria-label="Delete task"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        {/* Task stats */}
        {tasks.length > 0 && (
          <div className="text-sm text-muted-foreground border-t pt-4">
            <p>
              {activeTasks} task{activeTasks !== 1 ? "s" : ""} remaining
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskManager;
