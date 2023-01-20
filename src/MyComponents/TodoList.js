import React from "react";
import { Todo } from "./Todo";

export const TodoList = (props) => {
  let myStyle = {
    minHeight: "80vh",
    margin: "50px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">reMind Me</h3>
      {props.todos.length === 0
        ? "No task to display"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
