import React from 'react';
import { Link } from 'react-router-dom'; 
import './StarshipDetail.css'

function StarshipDetail (props) {
    return (
        <div className="containerT"> 
            <span>NAME</span>
            <span>{props.starship.name}</span><br/>
            <span>MODEL</span>
            <span>{props.starship.model}</span>
            <Link 
               to='/starships'>Return     
           </Link>
        </div>
    );
}

export default StarshipDetail;




  