import React from "react";
import "./todoItem.css";
import BtnComp from "../BtnComp/BtnComp";

const TodoItem = ({ todoDate, todoDesc, handleDelete, handleEdit }) => {
  return (
    <>
      <li>
        <h3 className="todo_list_title">{todoDate}</h3>
        <div className="todo_list_desc">
          <div>{todoDesc}</div>

          <div className="btn__group">
            <BtnComp btnColor={"edit"} btnValue={"Edit"} onclick={handleEdit} />
            <BtnComp
              btnColor={"delete"}
              btnValue={"delete"}
              onclick={handleDelete}
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
