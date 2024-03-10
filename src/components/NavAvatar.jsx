import React from 'react';
import profileImg from '../images/user.jpg';

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-5">
      <a 
        className="nav-link nav-profile d-flex align-items-center pe-2"
        href="#"
        data-bs-toggle="dropdown"
      >
        <img src={profileImg} alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">Jeevitha</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Jeevitha</h6>
          <span>Medical Equipment Manager</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a 
            className="dropdown-item d-flex align-items-center"
            href="users-profile.html"
          >
            <i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>
      </ul>
    </li>
  )
}

export default NavAvatar