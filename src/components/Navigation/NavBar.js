import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import weatherLogo from '../../assets/pictures/weatherLogo.png';
import classes from './NavBar.module.css';
import Scrollspy from 'react-scrollspy'

const navBar = () =>{
    return (
        <Navbar  className={classes.Navbar} expand="lg">
        
            
        <Navbar.Brand href="#home"><img src={weatherLogo} className={classes.Logo} alt="logo" /></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse className={classes.NavbarCollapse} id="basic-navbar-nav">
        
            <Nav className="ml-auto d-flex justify-content-between" id="scrollspy" >
                    
                    <Nav.Link  className={classes.NavLink} href="#current">Current weather</Nav.Link>
                    <Nav.Link className={classes.NavLink} href="#forecast">Forecast</Nav.Link>
                
            </Nav>
        

        </Navbar.Collapse>
        
        </Navbar>
    )
}


export default navBar;