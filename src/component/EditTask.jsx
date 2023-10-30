import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditTask(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className=" px-2 text-blue-600">
        Edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            id="editModal"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(props.id, name, description);
              props.updateTask(props.id, name, description);
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="btn btn-secondary">
            Cancel
          </button>
          <button
            form="editModal"
            onClick={handleClose}
            className="btn btn-primary"
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;
