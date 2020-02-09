import React from 'react';
import { Paper, IconButton } from '@material-ui/core';
import { LinkedinLogo } from './../../utils/LogsSVG'; 

import './Footer.scss';

function Footer(props) {
    return (
        <footer className="Footer">
            <Paper className="footer__paper" variant="outlined" square>
                <div className="footer__paper--content">
                    <div className="paper__social">
                        <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/xisca-socias-colom-4b9bb391/" target="_blank">
                            <LinkedinLogo  classes="paper__social--icons"/>
                        </IconButton>
                    </div>
                    <div className="paper__rights">
                        &copy; Francisca Maria Socias Colom
                    </div>
                </div>
            </Paper>
        </footer>
    );
}

export default Footer;