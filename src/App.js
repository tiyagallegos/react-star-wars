import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-dom';
import StarshipDetail from './pages/StarshipDetail/StarshipDetail';
import StarshipList from './pages/StarshipList/StarshipList';
import { getStarships } from './services/sw-api';

class App extends Component {
  state = {
    starships: []
  }

  async componentDidMount() {
    const {results} = await getStarships();
    this.setState({ starships: results})
    
  }
  render () {
      return (
    <div className="App">
      <header className="App-header">
        React Star Wars
      </header>
      <Switch>
        <Route exact path="/" render={props =>
          < StarshipDetail {...props} startships={this.state.starships} /> 
        }/> 
        <Route exact path="/:id" render={props =>
          < StarshipList {...props} /> 
        }/> 
      </Switch>
    </div>
  );
}
}
export default App;
///// in cssflex box direction row flex wrap