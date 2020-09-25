import React from 'react';
import {
    Avatar,
    IconButton,
    Box,
    Typography,
    Tabs,
    Tab,
    Popover,
    LinearProgress,
    Badge,
    Button,
    List,
    ListItem,
    Divider
  } from '@material-ui/core';
import NotificationsActiveTwoToneIcon from '@material-ui/icons/NotificationsActiveTwoTone';
import avatar7 from '../../../../../assets/img/avatar2.png';
import { withStyles } from '@material-ui/core/styles';
const StyledBadge = withStyles({
    badge: {
      backgroundColor: 'var(--success)',
      color: 'var(--success)',
      boxShadow: '0 0 0 2px #fff',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0
      }
    }
  })(Badge);

function Header() {
    return (
        <div >
            <div className="app-header app-header--shadow app-header--opacity-bg">
            <div className="app-header--pane">
            </div>
            <div className="app-header--pane">
            <span className="pr-4">
            <Badge
            variant="dot"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            badgeContent=" "
            classes={{ badge: 'bg-success badge-circle' }}>
            <Button
              onClick="#"
              className="btn-transition-none bg-neutral-success text-success font-size-lg p-0 d-inline-block shadow-none border-0 text-center d-44 rounded position-relative">
              <span>
                <NotificationsActiveTwoToneIcon />
              </span>
            </Button>
            </Badge>
            </span>
            
            <div className="d-block p-0 avatar-icon-wrapper">
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            badgeContent=" "
            classes={{ badge: 'bg-success badge-circle border-0' }}
            variant="dot">
            <div className="avatar-icon rounded">
              <img src={avatar7} alt="..." />
            </div>
          </StyledBadge>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Header;