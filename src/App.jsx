import React, { useState, useEffect } from "react";
import "./App.css";
import Task from "./component/Task";
import AddTask from "./component/AddTask";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const keys = ["name", "description", "priority"];
  const [query, setQuery] = useState("");

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const activeTasks = search(tasks).map((task) => {
    if (task.checked == false) {
      return (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          checked={task.checked}
          updateTask={updateTask}
          updateCheck={updateCheck}
          deleteTask={(e) => deleteTask(e, task.id)}
          priority={task.priority}
        />
      );
    }
  });
  const completedTasks = search(tasks).map((task) => {
    if (task.checked == true) {
      return (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          checked={task.checked}
          updateTask={updateTask}
          updateCheck={updateCheck}
          deleteTask={(e) => deleteTask(e, task.id)}
          priority={task.priority}
        />
      );
    }
  });

  function updateTask(id, newName, newDescription, newPriority) {
    const updateTasks = tasks.map((task) => {
      if (id == task.id) {
        return {
          ...task,
          name: newName,
          description: newDescription,
          priority: newPriority,
        };
      }
      return task;
    });
    setTasks(updateTasks);
  }

  function addTask(name, description, priority) {
    const newTask = {
      id: nanoid(),
      name: name,
      description: description,
      checked: false,
      priority: priority,
    };
    setTasks([...tasks, newTask]);
  }

  function updateCheck(id) {
    console.log("update check");
    const updateTasks = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTasks(updateTasks);
    window.location.reload(false);
  }
  function deleteTask(event, id) {
    event.stopPropagation();
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function search(tasks) {
    return tasks.filter((task) =>
      keys.some((key) => task[key].toLowerCase().includes(query.toLowerCase()))
    );
  }

  return (
    <div>
      {tasks.length != 0 ? (
        <div>
          <input
            type="search"
            placeholder="Search name, description, or priority..."
            className={
              "mx-auto my-8 flex borde p-2 border border-slate-300 rounded-full  w-1/2"
            }
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            {tasks.filter((task) => task.checked == false).length > 0 && (
              <div className="mx-auto my-2 flex w-1/2">
                <span className="text-xl font-bold ">
                  Active ({tasks.filter((task) => task.checked == false).length}
                  )
                </span>
              </div>
            )}
            {activeTasks}
            <AddTask addTask={addTask} />
          </div>
          <div>
            {tasks.filter((task) => task.checked).length > 0 && (
              <div className="mx-auto my-2 flex w-1/2">
                <span className="text-xl font-bold ">
                  Completed ({tasks.filter((task) => task.checked).length})
                </span>
              </div>
            )}
            {completedTasks}
          </div>
        </div>
      ) : (
        <div className="text-center justify-center mt-5">
          <span className="text-xl font-bold ">Create Your First Task</span>
          <AddTask addTask={addTask} />
        </div>
      )}
    </div>
  );
}

export default App;
