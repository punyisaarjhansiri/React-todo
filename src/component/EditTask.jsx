import { useState } from "react";

function EditTask(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [priority, setPriority] = useState(props.priority);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="rounded text-blue-500 p-1 hover:text-blue-900"
      >
        Edit
      </button>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-full sm:max-w-lg rounded-lg overflow-hidden shadow-lg">
            <div className=" text-slate-900 p-4 border-b-2">
              <h2 className="text-xl font-semibold">Edit Task</h2>
            </div>
            <div className="p-4">
              <form
                id="editModal"
                onSubmit={(e) => {
                  e.preventDefault();
                  props.updateTask(props.id, name, description, priority);
                  handleClose();
                }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Task Name
                  </label>
                  <input
                    type="text"
                    autoFocus
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="noPriority"
                        name="priority"
                        value="No Priority"
                        onChange={(e) => {
                          setPriority(e.target.value);
                        }}
                        checked={priority === "No Priority"}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="noPriority"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        No Priority
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="priority1"
                        name="priority"
                        value="Priority 1"
                        onChange={(e) => {
                          setPriority(e.target.value);
                        }}
                        checked={priority === "Priority 1"}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="priority1"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Priority 1
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="priority2"
                        name="priority"
                        value="Priority 2"
                        onChange={(e) => {
                          setPriority(e.target.value);
                        }}
                        checked={priority === "Priority 2"}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="priority2"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Priority 2
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="priority3"
                        name="priority"
                        value="Priority 3"
                        onChange={(e) => {
                          setPriority(e.target.value);
                        }}
                        checked={priority === "Priority 3"}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="priority3"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Priority 3
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    form="editModal"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleClose}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditTask;
