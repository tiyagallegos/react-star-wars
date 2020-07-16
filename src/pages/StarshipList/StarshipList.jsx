import React from 'react';
import { Link } from 'react-router-dom';

function StarshipList(props) {
    return (
        <div>
            Starship List
            <Link to='/:id'>Starship Deets</Link>
        </div>
    );
}

export default StarshipList;

//map over the props make the div a flex container so you can wrap the cards
//also use a link component from react router dom map the link to the detts page