import React from 'react';
import { Link } from 'react-router-dom';
import './IndexPage.css'




function Index(props) {
    return (
        <>
            <header className="reactHeader">REACT STAR WARS LAB</header>     
            <div className="IndexContainer"> 
            <div><Link className="Links" to={'/planets'}>🪐Planets</Link></div>
            <div><Link className="Links" to={'/starships'}>🚀Starships</Link></div>
        </div>
        </>
    );
}

export default Index;
