import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import {useSelector, useDispatch} from 'react-redux'
import { handleUsers } from './actions/index'

function App() {
  // render(){
    const users = useSelector(state => state.users)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()
    
    dispatch(handleUsers)
    
    return (
      <BrowserRouter>
        <div class="background">
          {console.log(`loggin value ${isLoggedIn}`)}
          {console.log(users)}
          <Switch>
              <Route path='/login' component={Login}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
}
export default App;
