import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoSmall from './img/LogoSmall.png';
import './css/Navigator.css';

function Navigator(props) {
  return (
    <Navbar className="mb-3 custom-nav">
      <Navbar.Brand><img src={LogoSmall} alt='taphouse logo' className="brand-img" /></Navbar.Brand>
      <NavDropdown title='Some Handy Links' id='basic-nav-dropdown' className='mr-auto float-left custom-link'>
        <NavDropdown.Item onClick={props.onIndexClick}>Main List</NavDropdown.Item>
        <NavDropdown.Item onClick={props.onCreateClick}>Add a Beer</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  )
}

Navigator.propTypes = {
  onIndexClick: PropTypes.func.isRequired,
  onCreateClick: PropTypes.func.isRequired
}

export default Navigator;