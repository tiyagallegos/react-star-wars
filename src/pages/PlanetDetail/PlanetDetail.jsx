import React from 'react';
import { Link } from 'react-router-dom'; 
import './PlanetDetail.css'

function PlanetDetail (props) {
    return (
        <div className="containerP"> 
            <span>NAME</span>
            <span>{props.planet.name}</span><br/>
            <span>CLIMATE</span>
            <span>{props.planet.climate}</span>
            <span>TERRAIN</span>
            <span>{props.planet.terrain}</span>
            <span>POPULATION</span>
            <span>{props.planet.population}</span>
            <Link 
               to='/planets'>Return     
           </Link>
        </div>
    );
}

export default PlanetDetail;
