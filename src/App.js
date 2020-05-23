import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar';

//React Router Import
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import CreatedTests from './components/pages/CreatedTests';
import ParticipatedTests from './components/pages/ParticipatedTests';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import NotFoundPage from './components/pages/NotFoundPage';


class App extends Component {
  render(){
    return(
      <div>
        <Navbar state = 'logged'/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/created-tests" component={CreatedTests}/>
          <Route path="/participated-tests" component={ParticipatedTests}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component ={Login}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  };
}

export default App;
