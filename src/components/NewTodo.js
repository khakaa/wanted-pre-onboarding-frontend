import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

function NewTodo({ newTodoRef, createTodo }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <div className="insert-positioner">
          <input
            placeholder="할 일 입력"
            className="input w-[270px]"
            data-testid="new-todo-input"
            ref={newTodoRef}
          />
          <button
            className="bg-emerald-300 hover:bg-emerald-400 todo-store-btn"
            data-testid="new-todo-add-button"
            onClick={createTodo}
          >
            저장
          </button>
        </div>
      )}

      <button
        className={
          "plus-btn " +
          (open ? "plus-btn-open" : "bg-emerald-300 hover:bg-emerald-400")
        }
        onClick={onToggle}
      >
        <MdAdd />
      </button>
    </>
  );
}

export default NewTodo;
