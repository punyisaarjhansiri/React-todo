import React, { useState, useEffect } from "react";
import "./App.css";
import Task from "./component/Task";
import AddTask from "./component/AddTask";
import { nanoid } from "nanoid";

function App() {
  console.log("we are about to show tasks");

  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const activeTasks = tasks.map((task) => {
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
        />
      );
    }
  });
  const completedTasks = tasks.map((task) => {
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
        />
      );
    }
  });

  function updateTask(id, newName, newDescription) {
    console.log("update Task");
    const updateTasks = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, name: newName, description: newDescription };
      }
      return task;
    });
    setTasks(updateTasks);
  }

  function addTask(name, description) {
    const newTask = {
      id: nanoid(),
      name: name,
      description: description,
      checked: false,
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
    window.location.reload(false);
  }

  return (
    <div>
      <div className="container fill text-center">
        {tasks.length != 0 ? (
          <div className="text-center justify-center mt-5">
            {/*  <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                Search
              </span>
              <input type="search" className="form-control" />
            </div> */}
            <div>
              {tasks.filter((task) => task.checked == false).length > 0 && (
                <h2 className="mb-2">
                  Active ({tasks.filter((task) => task.checked == false).length}
                  )
                </h2>
              )}
              {activeTasks}
              <AddTask addTask={addTask} />
            </div>
            <div className="text-center justify-center mt-5">
              {tasks.filter((task) => task.checked).length > 0 && (
                <h2>
                  Completed ({tasks.filter((task) => task.checked).length})
                </h2>
              )}
              {completedTasks}
            </div>
          </div>
        ) : (
          <div className="text-center justify-center mt-5">
            <h3>You have no task</h3>
            <AddTask addTask={addTask} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
