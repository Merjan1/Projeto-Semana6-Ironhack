import React from 'react';
import { Link } from 'react-router-dom';
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

        {/* <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
                <Link to='/'><i style={{ color: 'white' }} className="fas fa-home "></i></Link>
            </nav> */}
    </div>
    )

}

export default NavBar;