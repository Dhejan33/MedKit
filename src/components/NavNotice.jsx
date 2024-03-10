import React from 'react'

function NavNotice() {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
                you have 4 new notifications
                <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                    </span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
                </li>
            
            
                <li className="notification-item" >
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                    <h4><b>PRODUCT : </b>Fetal Monitor<br></br>
                        <b>COMPANY : </b>Siemens
                    </h4>
                        <p>Next service date : 13/05/2024</p>
                        <p>30 min ago</p>
                    </div>
            </li>

            <li >
                 <hr className="dropdown-divider" />
            </li>
            
            <li className="notification-item">
                <i className="bi bi-x-circle text-danger"></i>
                <div>
                <h4><b>PRODUCT : </b>Pulse Oximeter<br></br>
                    <b>COMPANY : </b>Siemens
                </h4>
                        <p>Next service date : 18/07/2024</p>
                        <p>30 min ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i>
                <div>
                <h4><b>PRODUCT : </b>ECG<br></br>
                    <b>COMPANY : </b>Agilent
                </h4>
                        <p>Next service date :13/05/2024</p>
                        <p>30 min ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-info-circle text-primary"></i>
                <div>
                <h4><b>PRODUCT : BP Monitor</b><br></br>
                    <b>COMPANY : </b>Agilent
                </h4>
                        <p>Next service date : 13/05/2024</p>
                        <p>30 min ago</p>
                
                </div>
            </li>

            <li>
                 <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
            </li>
        </ul>
    </li>
  );
}

export default NavNotice