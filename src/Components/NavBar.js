import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css'

function NavBar() {

    return (<div id='navbar'>
        <div>
            <Navbar className='justify-content-center'>
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    </div>
    )

}

export default NavBar;