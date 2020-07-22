import React from 'react';
import { Link } from 'react-router-dom';
import './PlanetList.css' 



function PlanetList(props, idx) {
    return (
        <>
        <Link className="home" to={'/index'}>🪐</Link>
        <div >
            <header className="PlanetsHeader">Planets</header>
           
            <div className="container">  
                {props.planets.map((planet, idx) => 
            <Link className='PlanetBox'
                to={`/planets/${idx}`}>  
                {planet.name}   
            </Link>
            )} 
            </div>
        </div>
        </>
    );
}

export default PlanetList;

