import "./App.css";
import Header from "./MyComponents/Header";
import { TodoList } from "./MyComponents/TodoList";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const addTodo = (title, desc) => {
    console.log("adding items:", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos.length + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return ( 
    <Router>
      <Header title="reMind It"/>
      <Routes>
          <Route exact path="/" element={
           <>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} onDelete={onDelete} /> 
           </>
          }/>
          <Route exact path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
