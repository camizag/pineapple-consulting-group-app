import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from "react-router-dom";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="nav">
            
            <Link to="/" className="site-title">
                    <img src="Logos_Logo primario Verde.png" alt="Logo de Pineapple Consulting Group" className="title-logo"></img>
            </Link>
            <ul>
                <li>
                    <Button onClick={handleClick}
                    style={{
                        color: "#364A37"}}>
                        Services
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link className='navbar-link' to="/real-state"> Real State </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className='navbar-link' to="/development"> Development </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className='navbar-link' to="/business-planning"> Consulting for Strategic Business Planning </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className='navbar-link' to="/professional-development"> Career / Professional Development Consulting </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className='navbar-link' to="/non-profit"> Non-profit Work </Link>
                        </MenuItem>
                    </Menu>
                    
                </li>
                <li>
                    <Button
                    style={{
                        color: "#364A37"}}>
                    <Link to="/about">ABOUT</Link>
                    </Button>
                </li>
                <li>
                    <Button 
                    style={{
                        color: "#364A37"}}>
                    <Link to="/contact">CONTACT</Link>
                    </Button>
                </li>
            </ul>
        </div>
    )
}