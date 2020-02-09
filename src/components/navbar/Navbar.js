import React from 'react';
import { AppBar, Button } from '@material-ui/core';

import './Navbar.scss'

function Navbar(props) {
    return (
        <AppBar position="fixed" className="Navbar">

            <div className="navbar">
                <div className="navbar__text">
                    psicologia socias
                </div>
                <div className="navabr__links">
                    <Button href="/#">Sobre mí</Button>
                    <Button href="/#">Contacto</Button>
                </div>
            </div>
        
        </AppBar>
    );
}

export default Navbar;