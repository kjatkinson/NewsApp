import React from 'react';


const Navbar = ({ setCategory }) => {
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary animated-navbar" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">New's Today</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => handleCategoryChange('general')}>General</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleCategoryChange('business')}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleCategoryChange('technology')}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleCategoryChange('sports')}>Sports</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
