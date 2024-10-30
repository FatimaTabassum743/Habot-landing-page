
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">HABOT</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Supplier Zone</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Buyer Zone</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Login/Sign Up</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
















