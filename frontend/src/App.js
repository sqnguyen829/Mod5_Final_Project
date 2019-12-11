import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
        <div class="background">
        <Switch>
          <Route path='/login' component={Login}/>
          {/* <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route exact path="/" component={StartLogin}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
