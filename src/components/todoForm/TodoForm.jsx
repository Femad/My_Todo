import React, { useState } from "react";
import "./todoForm.css";
import BtnComp from "../BtnComp/BtnComp";
import TodoItem from "../todoItem/TodoItem";

const TodoForm = () => {
  const [btnAction, setBtnAction] = useState(true);
  const [formData, setFormData] = useState({
    id: 0,
    todoDate: "",
    todoDesc: "",
  });
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let id = todos.length + 1;
    setTodos([
      ...todos,
      {
        id,
        todoDate: formData.todoDate,
        todoDesc: formData.todoDesc,
      },
    ]);
    setFormData({
      id: 0,
      todoDate: "",
      todoDesc: "",
    });
    console.log(todos);
  };
  const handleEdit = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    let newEdit = todos.find((todo) => todo.id == id);
    setFormData(newEdit);
    setTodos(newTodos);
    setBtnAction(false);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { ...formData, todoDate: formData.todoDate, todoDesc: formData.todoDesc },
    ]);
    setFormData({
      id: 0,
      todoDate: "",
      todoDesc: "",
    });
    setBtnAction(true);
  };
  const handleDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="form__container">
      <form>
        <div className="todo__title">
          <label htmlFor="todoDate">Date:</label>
          <input
            id="todoDate"
            name="todoDate"
            onChange={handleChange}
            value={formData.todoDate}
            type="date"
            className="todo__title_input"
          />

          <label htmlFor="todoDesc">Description:</label>
          <input
            id="todoDesc"
            name="todoDesc"
            onChange={handleChange}
            value={formData.todoDesc}
            type="text"
            className="todo__desc_input"
          />
        </div>

        <button
          className={btnAction ? "submit__large" : "update__large"}
          onClick={btnAction ? handleSubmit : handleUpdate}
        >
          {btnAction ? "Submit" : "Update"}
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todoDate={todo.todoDate}
            todoDesc={todo.todoDesc}
            handleDelete={() => handleDelete(todo.id)}
            handleEdit={() => handleEdit(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
