import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import StarshipDetail from './pages/StarshipDetail/StarshipDetail';
import StarshipList from './pages/StarshipList/StarshipList';
import { getStarships } from './services/sw-api';
import LandingPage from './pages/LandingPage/LandingPage';

class App extends Component {
  state = {
    starships: [],
    shipImages: [
    'https://i.imgur.com/EUvvLfZ.https://i.imgur.com/OJu6eEd.jpg?fb', 
    'https://i.imgur.com/HwFsVC7.jpg',
    'https://i.imgur.com/oO15Fzl.jpg',
    'https://i.imgur.com/GEi821S.jpeg',
    'https://i.imgur.com/sNFmt5Z.jpg',
    'https://i.imgur.com/LOCRKy0.jpeg',
    'https://i.imgur.com/tX5pGpe.jpg',
    'https://i.imgur.com/ohvKeL1.jpg',
    'https://i.imgur.com/I0JLpbM.jpeg',
    'https://4.bp.blogspot.com/-aDB79v_b9w4/V7C8wfnNE7I/AAAAAAAAKyc/IKA6VrxOlfYq0ns2KVhTWBu_60_ihb6bACLcB/s640/Rebel_transport_box_art.jpg'

   ]
  }

  getStarship = (idx) => {
    return this.state.starships[idx]
  }

  async componentDidMount() {
    const {results} = await getStarships();
    
    this.setState({ starships: results})
    
  }
  render () {
      return (
        <>
        <Route exact path="/" render={props =>
          <LandingPage /> 
        }/> 
    <div className="App">    
      <header className="App-header">
        React Star Wars
      </header>
      <Switch>
        <Route exact path="/starships/:id" render={props =>
          <StarshipDetail 
          {...props} 
          starship={this.state.starships[props.match.params.id]} 
          shipImages={this.state.shipImages[props.match.params.id]}/> 
        }/> 
        <Route exact path="/starships" render={props =>
          <StarshipList 
          {...props} 
          starships={this.state.starships}
          shipImages={this.state.shipImages} /> 
        }/> 
       
      </Switch>
    </div>
    </>
  );
}
}
export default App;
///// in cssflex box direction row flex wrap