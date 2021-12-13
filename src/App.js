
import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/navBar';
import Movies from './components/movies';
import NotFound from './components/common/notFound';
import MovieForm from './components/common/movieForm';



function App() {
  return (
   <React.Fragment>
    <NavBar/>
    <Switch>

    <Route path='/movies/:id' component={MovieForm}/>
    <Route path='/movies' component={Movies}/>
    <Route path='/not-found' component={NotFound}/>
    <Route path='/' exact component={Movies}/>
    <Redirect to='not-found'/>
    </Switch>
    </React.Fragment>
    

  
  );
}

export default App;
