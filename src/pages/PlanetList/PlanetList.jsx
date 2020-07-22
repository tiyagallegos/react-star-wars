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

//map over the props make the div a flex container so you can wrap the cards
//also use a link component from react router dom map the link to the detts page
//<div> 
//{props.shipImages.map((img, idx) =>
 ///   <img key={image} src={require(`icons/${img}.png`)/>
//)}
   // </div>  