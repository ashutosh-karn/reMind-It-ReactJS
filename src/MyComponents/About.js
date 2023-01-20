import React from 'react'
export const About = () => {
  let myStyle1 = {
    color: "white",
    background: "black",
    borderRadius: "1em",
    padding: "1em",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  };
  return (
    <div className="card bg-dark text-white" style={myStyle1}>This is a To-Do app built using React.js. A task can be added and deleted in this application. It uses local storage to store the data.</div>
  )
}
