import React from "react";

function NewTodo({ newTodoRef, createTodo }) {
  return (
    <>
      <input data-testid="new-todo-input" ref={newTodoRef} />
      <button data-testid="new-todo-add-button" onClick={createTodo}>
        추가
      </button>
    </>
  );
}

export default NewTodo;
