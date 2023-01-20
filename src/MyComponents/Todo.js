import React from "react";

export const Todo = ({ todo, onDelete }) => {
  return (
    <div className="card-group">
    <div className="card my-3">
      <h4 className="card-header">{todo.title}</h4>
      <div className="card-body">
      <p>{todo.desc}</p>
      <hr/>
      <button className="btn btn-sm btn-dark" onClick={() => {onDelete(todo);}}>
        Delete It
      </button>
      </div>
      </div>
   </div>

  );
};
