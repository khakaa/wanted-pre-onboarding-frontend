import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { BASEURL } from "../api/instance";
import {
  creteTodoApi,
  getTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../api/TodoApi";
import NewTodo from "../components/NewTodo";
import TodoItem from "../components/TodoItem";

function Todo() {
  const newTodoRef = useRef();
  const editTodoInputRef = useRef();
  const [todoList, setTodoList] = useState([]);

  //   getTodo
  const getTodo = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await axios.get("/todos", {
        baseURL: BASEURL,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (response.status === 200) {
        let list = response.data;
        setTodoList(list);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //   createTodo
  const createTodo = async () => {
    try {
      const response = await creteTodoApi({ todo: newTodoRef.current.value });
      if (response.status === 201) {
        newTodoRef.current.value = null;
        const newTodo = response.data;
        setTodoList([...todoList, newTodo]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  //   updateTodo
  const updateTodo = async (data, id) => {
    try {
      const response = await updateTodoApi(data, id);
      if (response.status === 200) {
        setTodoList(
          todoList.map((todo) =>
            todo.id === id
              ? { ...todo, isCompleted: data.isCompleted, todo: data.todo }
              : todo
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todoList);

  // deleteTodo
  const deleteTodo = async (id) => {
    try {
      const response = await deleteTodoApi(id);
      if (response.status === 204) {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <NewTodo newTodoRef={newTodoRef} createTodo={createTodo} />
      {todoList?.map((todo) => (
        <TodoItem
          key={todo.id}
          editTodoInputRef={editTodoInputRef}
          id={todo.id}
          isCompleted={todo.isCompleted}
          todo={todo.todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default Todo;
