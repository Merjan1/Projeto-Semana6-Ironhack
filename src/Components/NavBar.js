import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css'

function NavBar() {

    return (<div id='navbar'>
        <div>
            <Nav className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link bsPrefix='text-white' href="/">Home</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    </div>
    )

}

export default NavBar;