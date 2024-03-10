import React from 'react';
import './sideBar.css';
import navList from '../data/navItem';

function SideBar() {
  return (
    <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav" >
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="bi bi-grid"></i>
                    <span>Overview</span>
                </a>
            </li>
            

            <li className="nav-item">
                <a 
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
                >
                    <i className="bi bi-menu-button-wide"></i>
                    <span>Instruments</span>
                    
                </a>
                <ul 
                   id="components-nav"
                   classname="nav-content collapse "
                   data-bs-parent="#sidebar-nav"
                   >
                </ul>
            </li>
            <li className="nav-item">
                <a
                className="nav-link collapsed"
                data-bs-target="#forms-nav"
                data-bs-toggle="collapse"
                href="#"
            >
                <i className="bi bi-journal-text"></i>
                <span>Appointments</span>
             
                </a>
                <ul
                    id="forms-nav"
                    className="nav-content collapse"
                    data-bs-parent="#sidebar-nav"
                    >
                </ul>
                </li>
                <li className="nav-item">
                <a 
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                href="#"
                >
                    <i className="bi bi-credit-card"></i>
                    <span>Payment</span>
                    
                </a>
                <ul 
                   id="components-nav"
                   classname="nav-content collapse "
                   data-bs-parent="#sidebar-nav"
                   >
                </ul>
            </li>
            </ul>
    </aside>
  )
}

export default SideBar;