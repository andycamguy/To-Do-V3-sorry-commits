import React, { useState } from "react";

export default function TodoItem({ id, label, completed, onToggle, onDelete }) {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleCheckboxChange = () => {
    onToggle(id);
    setShowDeleteButton(!completed);
  };

  const handleDeleteButtonClick = () => {
    onDelete(id);
  };

  return (
    <div className="border border-dark ">
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
        onClick={() => setShowDeleteButton(!completed)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {label}
      </span>
      {showDeleteButton && (
        <button className="btn  ml-2" onClick={handleDeleteButtonClick}>
          Delete
        </button>
      )}
    </div>
  );
}
