import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipList.css' 



function StarshipList(props, idx) {
    return (
        <>
        <Link className="home" to={'/index'}>🚀</Link>
        <div >
            <header className="starshipsHeader">STARSHIPS</header>
           
            <div className="container">  
                {props.starships.map((starship, idx) => 
            <Link className=' StarshipBox'
                to={`/starships/${idx}`}>  
                {starship.name}   
            </Link>
            )} 
            </div>
        </div>
        </>
    );
}

export default StarshipList;

