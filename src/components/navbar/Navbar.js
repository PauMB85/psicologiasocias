import React from 'react';
import { AppBar, Button } from '@material-ui/core';

import './Navbar.scss'

function Navbar(props) {
    return (
        <AppBar position="fixed" className="Navbar">

            <div className="navbar">
                <div className="navbar__text">
                    <a href="/" className="navbar__text--decoration">psicologia socias</a>
                </div>
                <div className="navbar__links">
                    <Button href="/aboutme">Sobre mí</Button>
                    <Button href="/contact">Contacto</Button>
                </div>
            </div>
        
        </AppBar>
    );
}

export default Navbar;