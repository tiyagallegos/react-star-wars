import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import StarshipDetail from './pages/StarshipDetail/StarshipDetail';
import StarshipList from './pages/StarshipList/StarshipList';
import { getStarships, getPlanets } from './services/sw-api';
import LandingPage from './pages/LandingPage/LandingPage';
import PlanetList from './pages/PlanetList/PlanetList'
import PlanetDetail from './pages/PlanetDetail/PlanetDetail';
import Index from './pages/IndexPage/IndexPage'


class App extends Component {
  state = {
    starships: [],
    planets: []
  }

  getStarship = (idx) => {
    return this.state.starships[idx]
  }
  
  getPlanet = (idx) => {
    return this.state.planets[idx]
  }

  async componentDidMount() {
    const starshipData = await getStarships();
    const planetData = await getPlanets();
    
    this.setState({ starships: starshipData.results, planets: planetData.results})
    
  }
  render () {
      return (
        <>
    <div className="App">    
      <Switch>
      <Route exact path="/" render={props =>
          <LandingPage /> 
        }/> 
        <Route exact path="/starships/:id" render={props =>
          <StarshipDetail 
          {...props} 
          starship={this.state.starships[props.match.params.id]} 
          /> 
        }/> 
        <Route exact path="/starships" render={props =>
          <StarshipList 
          {...props} 
          starships={this.state.starships}
           /> 
        }/> 

        <Route exact path="/planets" render={props =>
          <PlanetList 
          {...props} 
          planets={this.state.planets}
           /> 
        }/> 

        <Route exact path="/planets/:id" render={props =>
          <PlanetDetail 
          {...props} 
          planet={this.state.planets[props.match.params.id]} 
          /> 
        }/> 

        <Route exact path="/index" render={props =>
          <Index /> 
        }/> 
       
      </Switch>
    </div>
    </>
  );
}
}
export default App;
///// in cssflex box direction row flex wrap