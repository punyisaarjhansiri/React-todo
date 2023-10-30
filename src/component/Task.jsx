import React, { useState } from "react";
import EditTask from "./EditTask";

export default function Todo(props) {
  const [checked, setChecked] = useState(props.checked);

  return (
    <div className="flex items-center justify-between m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-sm space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-9">
      <input
        type="checkbox"
        className="block mx-sauto h-6 w-6 rounded-full sm:mx-0 sm:shrink-0"
        onChange={(e) => {
          e.preventDefault();
          console.log(props.id, checked);
          props.updateCheck(props.id);
        }}
        checked={props.checked}
      />
      <div className="text-left space-y-2 sm:text-left">
        <div className="space-y-0">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">{props.description}</p>
        </div>
      </div>
      <div className="text-left space-y-2 sm:text-left">
        <EditTask
          name={props.name}
          id={props.id}
          description={props.description}
          updateTask={props.updateTask}
        />
        <button className="ml-1 text-blue-600" onClick={props.deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}
