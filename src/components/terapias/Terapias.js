import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import './Terapias.scss';

function Terapias(props) {

    const [cardTerapia,setCardTerapia] = useState();

    useEffect(() => {
        const terapias = [
            {title:"Title 1", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua"},
            {title:"Title 2", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua"},
            {title:"Title 3", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua"},
            {title:"Title 4", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua"},
            {title:"Title 5", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua"},
            {title:"Title 6", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua"},
            {title:"Title 7", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua"}
        ];
    
        const cardTerapia = terapias.map((terapia, i) => {
            return CardTerapia(terapia, i);
        });
        setCardTerapia(cardTerapia);
    }, []);
    

    return (
        <section className="Terapias">
            <div className="terapias__title">
                <h1>Terapias</h1>
            </div>
            <div className="terapias__services">
                {
                    cardTerapia
                }
            </div>
            
        </section> 
    );
}


function CardTerapia({title, description}, key) {

    return(
        <div className="terapia__services--card" key={key}>
            <Card>
                <CardHeader 
                    title={title}
                >
                </CardHeader>
                <CardContent>
                    { description }
                </CardContent>
            </Card>
        </div>
        
    );
}

export default Terapias;