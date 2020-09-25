import React from 'react';
import projectLogo from '../../../../../assets/img/react.svg';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
function Sidebar() {
    return (
        <div className="app-sidebar app-sidebar--dark">
        <div className="app-sidebar--header">
        <div className="app-sidebar-logo">
          <NavLink
            to="/"
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-sidebar-logo">
            <div className="app-sidebar-logo--icon">
              <img
                alt="Bamburgh React Admin Dashboard with Material-UI PRO"
                src={projectLogo}
              />
            </div>
            <div className="app-sidebar-logo--text">
              <span>General</span>
              <b>tpp</b>
            </div>
          </NavLink>
        </div>
        </div>
        <div className="app-sidebar--content">
        <PerfectScrollbar>
        <div className="sidebar-navigation">
          <div className="sidebar-header">
            <span>Navigation menu</span>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                onClick="#"
                className="nav-link-simple"
                to="/Overview">
                <span className="sidebar-icon">
                  <BallotTwoToneIcon />
                </span>
                Scoring Transferencia
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
        </PerfectScrollbar>
        </div>

        </div>
    );
}

export default Sidebar;