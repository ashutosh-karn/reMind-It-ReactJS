import React from 'react'
import { Link } from 'react-router-dom';
export default function Header(props) {
return (
    <nav className="navbar navbar-expand-lg bg-primary top">
      <div className="container-fluid">
        <span className="logo position-absolute" alt="">
      <img src="logo.png" width="32px"/>
      </span>
    <Link className="navbar-brand text-white h1 mt-1 position-relative mx-5" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="navbar" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}