import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavBar() {

    return (<div>
        <div>
            <Navbar bg="primary" variant="dark" className='justify-content-center'>
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