import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navbar;