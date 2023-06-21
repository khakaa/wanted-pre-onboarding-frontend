import { useState } from "react";
import { MdDone } from "react-icons/md";

function TodoItem({
  editTodoInputRef,
  id,
  isCompleted,
  todo,
  updateTodo,
  deleteTodo,
}) {
  const [checked, setChecked] = useState(isCompleted);
  const [mode, setMode] = useState(false);

  const checkHandler = (e, todo, id) => {
    setChecked(!checked);
    updateTodo(
      {
        todo: todo,
        isCompleted: e.target.checked,
      },
      id
    );
  };

  const editModeHandler = () => {
    setMode(!mode);
    console.log(mode);
  };

  const editSubmmit = (id) => {
    updateTodo(
      {
        todo: editTodoInputRef.current.value,
        isCompleted: checked,
      },
      id
    );
    editModeHandler();
  };

  return (
    <div>
      {mode === true ? (
        <li className="todo-item">
          <input
            className="input w-[220px]"
            data-testid="modify-input"
            defaultValue={todo}
            ref={editTodoInputRef}
          />
          <button
            className="bg-emerald-300 hover:bg-emerald-400 todo-store-btn"
            data-testid="submit-button"
            onClick={() => {
              editSubmmit(id);
            }}
          >
            제출
          </button>
          <button
            className="todo-store-btn bg-red-400 hover:bg-red-500"
            data-testid="cancel-button"
            onClick={editModeHandler}
          >
            취소
          </button>
        </li>
      ) : (
        <li className="todo-item">
          <label>
            <input
              className="hidden"
              checked={checked}
              type="checkbox"
              onChange={(e) => {
                checkHandler(e, todo, id);
              }}
            />
            {checked ? (
              <div className="check-box checked">
                <MdDone className="text-emerald-300" />
              </div>
            ) : (
              <div className="check-box"></div>
            )}
          </label>
          <span className={"w-[200px] " + (checked && "text-zinc-300")}>
            {todo}
          </span>
          <button
            className="bg-emerald-300 hover:bg-emerald-400 todo-store-btn"
            data-testid="modify-button"
            onClick={editModeHandler}
          >
            수정
          </button>
          <button
            className=" bg-red-400 hover:bg-red-500 todo-store-btn"
            data-testid="delete-button"
            onClick={() => {
              deleteTodo(id);
            }}
          >
            삭제
          </button>
        </li>
      )}
    </div>
  );
}

export default TodoItem;
