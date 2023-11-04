import { useState } from "react";

function AddTask(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("No Priority");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
        <img src="/assets/AddButton.svg" />
      </button>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white w-full sm:max-w-lg rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <form
                id="addModal"
                onSubmit={(e) => {
                  e.preventDefault();
                  props.addTask(name, description, priority);
                  setName("");
                  setDescription("");
                  setPriority("No Priority");
                  handleClose();
                }}
              >
                <div className="mb-2">
                  <input
                    type="text"
                    autoFocus
                    value={name}
                    placeholder="Title"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="font-bold text-lg px-2 py-1 block w-full rounded-lg"
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    rows="2"
                    value={description}
                    placeholder="Description (Optional)"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="font-normal text-sm px-2 py-1 block w-full rounded-lg"
                  />
                </div>
                <div className="mb-4 border p-1 rounded w-fit">
                  <div className="flex space-x-4">
                    {/* 11111111111111111111111111 */}
                    <div class="space-x-2">
                      <label for="radio-button-0" class="cursor-pointer">
                        <input
                          type="radio"
                          id="radio-button-0"
                          name="radio-group"
                          value="No Priority"
                          onChange={(e) => {
                            setPriority(e.target.value);
                          }}
                          className="hidden"
                        />
                        <div
                          class={
                            priority !== "No Priority"
                              ? "flex space-x-2 items-center bg-white text-gray-700 px-2 py-1 text-xs rounded hover:bg-gray-200 transition duration-300"
                              : "flex space-x-2 items-center bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded hover:bg-gray-200 transition duration-300"
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="18"
                            viewBox="0 0 12 18"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8333 10.6666C10.9753 10.6665 11.1149 10.6302 11.2389 10.561C11.3629 10.4918 11.4672 10.3921 11.5418 10.2713C11.6165 10.1505 11.659 10.0126 11.6654 9.87079C11.6718 9.72894 11.6418 9.58781 11.5783 9.46079L10.0983 6.49996L11.5783 3.53913C11.6418 3.41211 11.6718 3.27098 11.6654 3.12913C11.659 2.98728 11.6165 2.84942 11.5418 2.72862C11.4672 2.60782 11.3629 2.5081 11.2389 2.43891C11.1149 2.36973 10.9753 2.33337 10.8333 2.33329H1.66667V1.49996C1.66667 1.27895 1.57887 1.06698 1.42259 0.910704C1.26631 0.754423 1.05435 0.666626 0.833333 0.666626C0.61232 0.666626 0.400358 0.754423 0.244078 0.910704C0.0877975 1.06698 0 1.27895 0 1.49996V16.5C0 16.721 0.0877975 16.9329 0.244078 17.0892C0.400358 17.2455 0.61232 17.3333 0.833333 17.3333C1.05435 17.3333 1.26631 17.2455 1.42259 17.0892C1.57887 16.9329 1.66667 16.721 1.66667 16.5V10.6666H10.8333Z"
                              fill="#565656"
                            />
                          </svg>{" "}
                          <p>No Priority</p>
                        </div>
                      </label>
                    </div>
                    {/* 11111111111111111111111111 */}
                    <div class="space-x-2">
                      <label for="radio-button-1" class="cursor-pointer">
                        <input
                          type="radio"
                          id="radio-button-1"
                          name="radio-group"
                          value="Priority 1"
                          onChange={(e) => {
                            setPriority(e.target.value);
                          }}
                          className="hidden"
                        />
                        <div
                          class={
                            priority !== "Priority 1"
                              ? "flex space-x-2 items-center bg-white text-red-500 px-2 py-1 text-xs rounded hover:bg-gray-200 transition duration-300"
                              : "flex space-x-2 items-center bg-gray-100 text-red-500 px-2 py-1 text-xs rounded hover:bg-gray-200 transition duration-300"
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="18"
                            viewBox="0 0 12 18"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8333 10.6666C10.9753 10.6665 11.1149 10.6302 11.2389 10.561C11.3629 10.4918 11.4672 10.3921 11.5418 10.2713C11.6165 10.1505 11.659 10.0126 11.6654 9.87079C11.6718 9.72894 11.6418 9.58781 11.5783 9.46079L10.0983 6.49996L11.5783 3.53913C11.6418 3.41211 11.6718 3.27098 11.6654 3.12913C11.659 2.98728 11.6165 2.84942 11.5418 2.72862C11.4672 2.60782 11.3629 2.5081 11.2389 2.43891C11.1149 2.36973 10.9753 2.33337 10.8333 2.33329H1.66667V1.49996C1.66667 1.27895 1.57887 1.06698 1.42259 0.910704C1.26631 0.754423 1.05435 0.666626 0.833333 0.666626C0.61232 0.666626 0.400358 0.754423 0.244078 0.910704C0.0877975 1.06698 0 1.27895 0 1.49996V16.5C0 16.721 0.0877975 16.9329 0.244078 17.0892C0.400358 17.2455 0.61232 17.3333 0.833333 17.3333C1.05435 17.3333 1.26631 17.2455 1.42259 17.0892C1.57887 16.9329 1.66667 16.721 1.66667 16.5V10.6666H10.8333Z"
                              fill="#ef4444"
                            />
                          </svg>{" "}
                          <span>Priority 1</span>
                        </div>
                      </label>
                    </div>
                    {/* 11111111111111111111111111 */}
                    <div class="space-x-2">
                      <label for="radio-button-2" class="cursor-pointer">
                        <input
                          type="radio"
                          id="radio-button-2"
                          name="radio-group"
                          value="Priority 2"
                          onChange={(e) => {
                            setPriority(e.target.value);
                          }}
                          className="hidden"
                        />
                        <div
                          class={
                            priority !== "Priority 2"
                              ? "flex space-x-2 items-center bg-white text-yellow-400 px-2 py-1 text-xs rounded hover:bg-gray-200 transition duration-300"
                              : "flex space-x-2 items-center bg-gray-100 text-yellow-400 px-2 py-1 text-xs rounded hover:bg-gray-200 transition duration-300"
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="18"
                            viewBox="0 0 12 18"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8333 10.6666C10.9753 10.6665 11.1149 10.6302 11.2389 10.561C11.3629 10.4918 11.4672 10.3921 11.5418 10.2713C11.6165 10.1505 11.659 10.0126 11.6654 9.87079C11.6718 9.72894 11.6418 9.58781 11.5783 9.46079L10.0983 6.49996L11.5783 3.53913C11.6418 3.41211 11.6718 3.27098 11.6654 3.12913C11.659 2.98728 11.6165 2.84942 11.5418 2.72862C11.4672 2.60782 11.3629 2.5081 11.2389 2.43891C11.1149 2.36973 10.9753 2.33337 10.8333 2.33329H1.66667V1.49996C1.66667 1.27895 1.57887 1.06698 1.42259 0.910704C1.26631 0.754423 1.05435 0.666626 0.833333 0.666626C0.61232 0.666626 0.400358 0.754423 0.244078 0.910704C0.0877975 1.06698 0 1.27895 0 1.49996V16.5C0 16.721 0.0877975 16.9329 0.244078 17.0892C0.400358 17.2455 0.61232 17.3333 0.833333 17.3333C1.05435 17.3333 1.26631 17.2455 1.42259 17.0892C1.57887 16.9329 1.66667 16.721 1.66667 16.5V10.6666H10.8333Z"
                              fill="#facc15"
                            />
                          </svg>{" "}
                          <span>Priority 2</span>
                        </div>
                      </label>
                    </div>
                    {/* 11111111111111111111111111 */}
                    <div class="space-x-2">
                      <label for="radio-button-3" class="cursor-pointer">
                        <input
                          type="radio"
                          id="radio-button-3"
                          name="radio-group"
                          value="Priority 3"
                          onChange={(e) => {
                            setPriority(e.target.value);
                          }}
                          className="hidden"
                        />
                        <div
                          class={
                            priority !== "Priority 3"
                              ? "flex space-x-2 items-center bg-white text-lime-500 px-2 py-1 text-xs rounded hover:bg-gray-200 transition duration-300"
                              : "flex space-x-2 items-center bg-gray-100 text-lime-500 px-2 py-1 text-xs rounded hover:bg-gray-400 transition duration-300"
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="18"
                            viewBox="0 0 12 18"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.8333 10.6666C10.9753 10.6665 11.1149 10.6302 11.2389 10.561C11.3629 10.4918 11.4672 10.3921 11.5418 10.2713C11.6165 10.1505 11.659 10.0126 11.6654 9.87079C11.6718 9.72894 11.6418 9.58781 11.5783 9.46079L10.0983 6.49996L11.5783 3.53913C11.6418 3.41211 11.6718 3.27098 11.6654 3.12913C11.659 2.98728 11.6165 2.84942 11.5418 2.72862C11.4672 2.60782 11.3629 2.5081 11.2389 2.43891C11.1149 2.36973 10.9753 2.33337 10.8333 2.33329H1.66667V1.49996C1.66667 1.27895 1.57887 1.06698 1.42259 0.910704C1.26631 0.754423 1.05435 0.666626 0.833333 0.666626C0.61232 0.666626 0.400358 0.754423 0.244078 0.910704C0.0877975 1.06698 0 1.27895 0 1.49996V16.5C0 16.721 0.0877975 16.9329 0.244078 17.0892C0.400358 17.2455 0.61232 17.3333 0.833333 17.3333C1.05435 17.3333 1.26631 17.2455 1.42259 17.0892C1.57887 16.9329 1.66667 16.721 1.66667 16.5V10.6666H10.8333Z"
                              fill="#84cc16"
                            />
                          </svg>{" "}
                          <span>Priority 3</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-white sm:flex space-x-8 sm:flex-row-reverse">
                  <button
                    type="submit"
                    form="addModal"
                    className="w-full inline-flex justify-center rounded-full shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Add Task
                  </button>
                  <button
                    onClick={handleClose}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-full px-4 py-2 bg-white text-base font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
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

export default AddTask;
