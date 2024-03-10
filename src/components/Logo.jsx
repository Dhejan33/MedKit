import React from 'react';
import './logo.css';
import logoImg from '../images/logo.jpg';

function Logo() {
  const handleToggleSideBar= () => {
    document.body.classList.toggle('toggle-sidebar');
  };
  return ( <div className="d-flex align-items-center justify-content-between">
    <a href="/" className="logo d-flex align-items-center">
      <img src={logoImg} alt="Logo"/>
      <span className="d-none d-lg-block"><b>MedKit</b></span>
    </a>
    <i 
    className="bi bi-list toggle-sidebar-btn"
    onClick={handleToggleSideBar}></i>
  </div> );   
}
export default Logo;