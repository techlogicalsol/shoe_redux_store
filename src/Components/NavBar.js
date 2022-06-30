import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux';


function NavBar(){

    const {totalQuantities} = useSelector(state => state.CartReducer)

    return(
        <>
  <nav className="navbar navbar-expand-md bg-dark navbar-dark">

  <NavLink className="navbar-brand" to="/">Navbar</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

 
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/men">Men</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/women">Women</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/newArrival">New Arrival</NavLink>
      </li>

      <li className="nav-item">
     
        <NavLink className="nav-link myCart" to="/cart">
          
            Cart <span className="badge badge-primary mySpan">{totalQuantities}</span>
          
        </NavLink>
      
        </li>
      
    </ul>
  </div>
</nav>

        </>
    )
}

export default NavBar