import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/navBar';
import Movies from './components/movies';
import NotFound from './components/common/notFound';
import MovieForm from './components/common/movieForm';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import { getCurrentUserFromLocalStorage } from './services/authService';

export default class App extends Component {
  state = {};
  componentDidMount = () => {
    const user = getCurrentUserFromLocalStorage();
    this.setState({ user });
  };

  render() {
    // console.log(this.state.user, 'state user?');
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route
            path='/movies/:id'
            render={(props) => {
              if (!this.state.user) {
                alert(
                  'Please login/register before CREATE, UPDATE and DELETE content'
                );
                return <Redirect to='/login' />;
              } else {
                return <MovieForm {...props} />;
              }
            }}
          />
          <Route
            path='/movies'
            render={(props) => <Movies {...props} user={this.state.user} />}
          />
          <Route path='/register' component={Register} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='not-found' />
        </Switch>
      </React.Fragment>
    );
  }
}
