import React, { useRef } from "react";

const TodoForm = ({ getItem }) => {
  const itemRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemRef.current.value === "") {
      itemRef.current.focus();
    } else {
      const item = {
        task: itemRef.current.value,
        completed: false,
      };
      getItem(item);
      itemRef.current.value = "";
    }
  };

  function onKeyEnter(e) {
    if (e.keyCode === 13) {
      console.log("enter key pressed");
      handleSubmit(e);
    }
  }

  return (
    <form className="mb-3 px-3 text-start d-flex flex-column" onSubmit={handleSubmit}>
      <div className="mb-2">
        <input
          type="text"
          name="Item"
          className="form-control"
          id="item"
          placeholder="Add Todo Items..."
          ref={itemRef}
          onKeyDown={onKeyEnter}
        />
      </div>
    
      <div>
        <button type="submit" className="btn btn-sm btn-primary bg-green-700" style={{ width: "100%" }}>
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
