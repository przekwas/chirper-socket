import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FaKiwiBird } from 'react-icons/fa';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <span className="navbar-brand mb-0 h1"><FaKiwiBird /> Chirper</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink to="/" className="nav-item nav-link" exact activeClassName="nav-item nav-link active">Chirps</NavLink>
                    <NavLink to="/magic" className="nav-item nav-link" exact activeClassName="nav-item nav-link active">Register/Login</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;