import { useState } from "react";

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
    <>
      {mode === true ? (
        <>
          <input
            data-testid="modify-input"
            defaultValue={todo}
            ref={editTodoInputRef}
          />
          <button
            data-testid="submit-button"
            onClick={() => {
              editSubmmit(id);
            }}
          >
            제출
          </button>
          <button data-testid="cancel-button" onClick={editModeHandler}>
            취소
          </button>
        </>
      ) : (
        <li key={id}>
          <label>
            <input
              checked={checked}
              type="checkbox"
              onChange={(e) => {
                checkHandler(e, todo, id);
              }}
            />
            <span>{todo}</span>
          </label>
          <button
            data-testid="modify-button"
            onClick={() => {
              editModeHandler();
            }}
          >
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => {
              deleteTodo(id);
            }}
          >
            삭제
          </button>
        </li>
      )}
    </>
  );
}

export default TodoItem;
