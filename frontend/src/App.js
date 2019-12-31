import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import DefaultPage from './components/DefaultPage'
import  Home from './containers/Home'

//when using connect App need props arg
function App(props) {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path = '/' component={DefaultPage}/>
              <Route path= '/login' component={Login}/>
              <Route path= '/signup' component={Signup}/>
              <Route path= '/home' component={Home} history={props.history}/>
          </Switch>
      </BrowserRouter>
    );
}
export default App

