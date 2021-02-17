import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavBar() {

    return (<div>
        <div>

            <Navbar bg="primary" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    </div>
    )

}

export default NavBar;