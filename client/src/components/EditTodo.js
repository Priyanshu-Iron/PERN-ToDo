import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5500/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      if (response.ok) {
        window.location = "/"; // Consider using React Router instead
      } else {
        throw new Error('Failed to update todo');
      }
    } catch (err) {
      console.error(err.message);
      // Consider adding user feedback here
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`} // Updated to Bootstrap 5 syntax
      >
        Edit
      </button>

      <div
        className="modal fade" // Added fade class for animation
        id={`id${todo.todo_id}`}
        tabIndex="-1" // Accessibility improvement
        aria-labelledby={`editModalLabel${todo.todo_id}`} // Accessibility
        aria-hidden="true" // Accessibility
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id={`editModalLabel${todo.todo_id}`}>
                Edit Todo
              </h4>
              <button
                type="button"
                className="btn-close" // Updated to Bootstrap 5
                data-bs-dismiss="modal" // Updated to Bootstrap 5
                onClick={() => setDescription(todo.description)}
                aria-label="Close" // Accessibility
              />
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                aria-label="Todo description" // Accessibility
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal" // Updated to Bootstrap 5
                onClick={updateDescription}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal" // Updated to Bootstrap 5
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;