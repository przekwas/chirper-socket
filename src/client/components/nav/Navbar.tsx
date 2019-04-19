import * as React from 'react';
import { useState, useEffect } from 'react';
import { FaKiwiBird } from 'react-icons/fa';
import LinkToggle from './LinkToggle';

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {

    const [chirpActive, setChirpActive] = useState<boolean>(true);
    const [registerActive, setRegisterActive] = useState<boolean>(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <span className="navbar-brand mb-0 h1"><FaKiwiBird /> Chirper</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <LinkToggle
                        onClick={() => { setChirpActive(!chirpActive); setRegisterActive(!registerActive) }}
                        active={chirpActive}
                        text="Chirps"
                        to="/" />
                    <LinkToggle
                        onClick={() => { setChirpActive(!chirpActive); setRegisterActive(!registerActive) }}
                        active={registerActive}
                        text="Register/Login"
                        to="/register" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;