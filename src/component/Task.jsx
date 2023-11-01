import React from "react";
import EditTask from "./EditTask";

export default function Todo(props) {
  const checked = props.checked;
  let priorityClass = "";

  if (props.priority == "No Priority") {
    priorityClass =
      "mx-auto my-2 flex w-1/2 items-center justify-between rounded-lg border border-l-8 bg-white p-4 shadow";
  } else if (props.priority == "Priority 1") {
    priorityClass =
      "mx-auto my-2 flex w-1/2 items-center justify-between rounded-lg border border-l-8 border-l-red-400 bg-white p-4 shadow";
  } else if (props.priority == "Priority 2") {
    priorityClass =
      "mx-auto my-2 flex w-1/2 items-center justify-between rounded-lg border border-l-8 border-l-amber-300 bg-white p-4 shadow";
  } else if (props.priority == "Priority 3") {
    priorityClass =
      "mx-auto my-2 flex w-1/2 items-center justify-between rounded-lg border border-l-8 border-l-lime-300 bg-white p-4 shadow";
  }

  return (
    <div>
      <div className={priorityClass}>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600 w-4 h-4"
            onChange={(e) => {
              e.preventDefault();
              console.log(props.id, checked);
              props.updateCheck(props.id);
            }}
            checked={props.checked}
          />
        </div>
        <div className="flex-grow text-left px-4">
          <p
            className={
              props.checked
                ? "text-lg text-slate-400 line-through font-semibold"
                : "text-lg text-black font-semibold"
            }
          >
            {props.name}
          </p>
          <p
            className={
              props.checked
                ? "text-slate-300 font-medium"
                : "text-slate-500 font-medium"
            }
          >
            {props.description}
          </p>
        </div>
        <div className="flex space-x-2">
          <EditTask
            name={props.name}
            id={props.id}
            description={props.description}
            updateTask={props.updateTask}
            priority={props.priority}
          />
          <button
            className="rounded text-red-500 p-1 hover:text-red-900"
            onClick={props.deleteTask}
          >
            Del
          </button>
        </div>
      </div>
    </div>
  );
}
