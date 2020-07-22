import React from 'react';
import { Link } from 'react-router-dom'; 
import './LandingPage.css'

function LandingPage (props) {
    return(
    <>   
        <div className="homePage">
            <Link to='/index'> 
                <img src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755"/>
            </Link>
        </div>
                
    </>
    );  
} 

export default LandingPage;




  