
import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/navBar';
import Movies from './components/movies';
import Customer from './components/cusotmer';
import Rental from './components/rental';
import Home from './components/home';
import NotFound from './components/common/notFound';
import MovieForm from './components/common/movieForm';
import Login from './components/common/login';
import Register from './components/common/register';



function App() {
  return (
   <React.Fragment>
    <NavBar/>
    <Switch>
    <Route path='/customer' component={Customer}/>
    <Route path='/rental' component={Rental}/>
    <Route path='/movies/:id' component={MovieForm}/>
    <Route path='/movies' component={Movies}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    <Route path='/not-found' component={NotFound}/>
    <Route path='/' exact component={Home}/>
    <Redirect to='not-found'/>
    </Switch>
    </React.Fragment>
    

  
  );
}

export default App;
