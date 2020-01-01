import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import DefaultPage from './components/DefaultPage'
import  Home from './containers/Home'

const myBackgroundImg = require('./images/background_bluecode.jpg');
const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${myBackgroundImg})`,
  backgroundSize: 'cover'   
};

function App(props) {
    return (
        <div className="cComponent" style={divStyle} >
            <BrowserRouter>
                <Switch>
                    <Route exact path = '/' component={DefaultPage}/>
                    <Route path= '/login' component={Login}/>
                    <Route path= '/signup' component={Signup} history={props.history}/>
                    <Route path= '/home' component={Home} history={props.history}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default App

