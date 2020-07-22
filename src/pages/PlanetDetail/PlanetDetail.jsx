import React from 'react';
import { Link } from 'react-router-dom'; 
import './PlanetDetail.css'

function PlanetDetail (props) {
    return (
        <>
        <header className="pDetailHeader">{props.planet.name}</header>
        <div className="containerP"> 
            <span>CLIMATE: {props.planet.climate}</span><br/>
            <span>TERRAIN: {props.planet.terrain}</span><br/>
            <span>POPULATION: {props.planet.population}</span><br/>           
            <Link className="bb" to='/planets'>🪐</Link>
        </div>
      </>  
    );
}

export default PlanetDetail;
