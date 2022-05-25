import React from 'react';
import { NavLink } from 'react-bootstrap';
import FavBtn from './Buttons/FavBtn';
import Login from './Buttons/Login';
import Signup from './Buttons/Signup';
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light py-4">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Kannada Pusthaka Malige</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
  <FavBtn/>
  <Login/>
  <Signup/>
</nav>
  
</>
  )
}

export default Header