import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/todoForm/TodoForm";
import TodoItem from "./components/todoItem/TodoItem";

function App() {
  const handleSubmit = () => {};
  return (
    <div className="app--container">
      <h1 className="app--header">What's the plan for today</h1>
      <TodoForm />
    </div>
  );
}

export default App;
