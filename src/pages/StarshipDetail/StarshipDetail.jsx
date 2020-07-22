import React from 'react';
import { Link } from 'react-router-dom'; 
import './StarshipDetail.css'

function StarshipDetail (props) {
    return (
        <div className="containerT"> 
        <header className="ssDetailHeader">
        {props.starship.name}
        </header>
            <span>MODEL:</span>
            <span>{props.starship.model}</span> <br/>
            <Link className="backships"
               to='/starships'>🚀     
           </Link>
           <br/>
        </div>
    );
}

export default StarshipDetail;




  