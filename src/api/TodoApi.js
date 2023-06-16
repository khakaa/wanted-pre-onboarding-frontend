import { instance2 } from "./instance";

const getTodoApi = () => {
  return instance2.get("/todos");
};

const creteTodoApi = (data) => {
  return instance2.post("/todos", data);
};

const updateTodoApi = (data, id) => {
  return instance2.put(`/todos/${id}`, data);
};

const deleteTodoApi = (id) => {
  return instance2.delete(`/todos/${id}`);
};

export { getTodoApi, creteTodoApi, updateTodoApi, deleteTodoApi };
