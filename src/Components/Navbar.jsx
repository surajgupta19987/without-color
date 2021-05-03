import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
        <>
        
         
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top" id="Navbar">
         <div className="container-fluid">
         <NavLink className="navbar-brand" to="/Home">CubexO</NavLink>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/">HOME</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Howwework">HOW WE WORK</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Customers">CUSTOMERS</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Services">SERVICES</NavLink>
        </li>

        
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Blog">BLOG</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Review">REVIEWS</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Aboutus">ABOUT US</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/Contactus">CONTACT US</NavLink>
        </li>

      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-light" type="btn">Talk to expert</button>
      </form>
    </div>
  </div>
</nav>


        </>
    );
};
export default Navbar;