import React from 'react'
import '../index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from './assets/logo.png';
import avatar from './assets/avatar.jpg';
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <>
      <header className="topbaar">
        <div className="logosection">
          <div className="d-flex justify-content-between align-item-center navbar">
            <div className="logobrand">
              <a href="index.html"><img src={logo} alt="logo" /></a>
            </div>
            <Dropdown  >
              <img src={avatar} alt='' className='image-nav' />
              <Dropdown.Toggle className='btn-primary' id="dropdown-basic">
                Gmail listing
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className='logout' > <Link to="/"> Logout</Link></Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </>)
}

export default header