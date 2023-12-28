import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";

const TodoListItem = ({
  message,
  index,
  deleteItem,
  onSaveChanges,
  onCheckboxChange,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editMode) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (event) => {
    setEditedMessage(event.target.value);
  };

  const handleSaveChanges = () => {
    onSaveChanges(index, editedMessage);
    toggleEditMode();
  };

  const handleKeyEscape = (event) => {
    if (event.key === "Escape") {
      setEditedMessage(message);
      toggleEditMode();
    }
  };

  return (
    <div className="d-flex mx-2 border-bottom p-3 justify-content-between align-items-center">
      {editMode ? (
        <input
          type="text"
          value={editedMessage.task}
          onChange={handleInputChange}
          onKeyDown={handleKeyEscape}
          ref={inputRef}
        />
      ) : (
        <div className="d-flex align-items-center">
          <div className="me-2">{index + 1}.</div>
          <div>{message.task}</div>
        </div>
      )}

      <div>
        {editMode ? (
          <button
            className="btn btn-sm btn-success mx-2"
            onClick={handleSaveChanges}
          >
            Update
          </button>
        ) : (
          <div>
            <IconButton onClick={toggleEditMode}>
              <RiEdit2Line className="fs-4" />
            </IconButton>
            <IconButton onClick={deleteItem}>
              <RiDeleteBin6Line className="fs-4" />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export default TodoListItem;
