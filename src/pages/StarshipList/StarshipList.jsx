import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipList.css' 



function StarshipList(props, idx) {
    return (
        <>
        <Link className="home" to={'/'}>🪐</Link>
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

//map over the props make the div a flex container so you can wrap the cards
//also use a link component from react router dom map the link to the detts page
//<div> 
//{props.shipImages.map((img, idx) =>
 ///   <img key={image} src={require(`icons/${img}.png`)/>
//)}
   // </div>  