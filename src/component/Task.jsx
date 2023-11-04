import React, { useState } from "react";
import EditTask from "./EditTask";

export default function Todo(props) {
  const checked = props.checked;
  let priorityClass = "";
  const [style, setStyle] = useState({ display: "none" });

  if (props.priority == "No Priority") {
    priorityClass =
      "mx-auto my-2 flex w-1/2 justify-between  border border-l-4 border-l-gray-400 bg bg-white py-2 px-4 ";
  } else if (props.priority == "Priority 1") {
    priorityClass =
      "mx-auto my-2 flex w-1/2 justify-between  border border-l-4 border-l-red-500 bg-white py-2 px-4 ";
  } else if (props.priority == "Priority 2") {
    priorityClass =
      "mx-auto my-2 flex w-1/2 justify-between  border border-l-4 border-l-yellow-400 bg-white py-2 px-4 ";
  } else if (props.priority == "Priority 3") {
    priorityClass =
      "mx-auto my-2 flex w-1/2 justify-between border border-l-4 border-l-lime-500 bg-white py-2 px-4";
  }

  return (
    <div>
      <div
        className={priorityClass}
        id="tasks"
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        <div className="pt-1">
          <label
            onClick={(e) => {
              e.preventDefault();
              console.log(props.id, checked);
              props.updateCheck(props.id);
            }}
          >
            {props.checked ? (
              <img src="/assets/CheckedBox.svg" />
            ) : (
              <img src="/assets/CheckBox.svg" />
            )}
          </label>
        </div>
        <div className="flex-grow text-left px-4">
          <p className={props.checked ? "text-lg line-through " : "text-lg"}>
            {props.name}
          </p>
          <p className="text-sm font-normal">{props.description}</p>
        </div>
        <div className="flex space-x-4">
          <EditTask
            name={props.name}
            id={props.id}
            description={props.description}
            updateTask={props.updateTask}
            priority={props.priority}
            setStyle={style}
          />
          <button onClick={props.deleteTask} style={style}>
            <img src="/assets/Delete.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
