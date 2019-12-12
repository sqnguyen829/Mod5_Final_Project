import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import DefaultPage from './components/DefaultPage'
import {useSelector, useDispatch} from 'react-redux'
import { handleUsers } from './actions/index'

function App() {
    const users = useSelector(state => state.users.users)
    const displayUser = useSelector(state => state.users.displayUsers)
    // const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()
    
    return (
      <BrowserRouter>
        {/* <div className="background"> */}
          <button onClick={ ()=> dispatch(handleUsers) }>fetch user</button>
          {console.log(users)}
          {console.log(displayUser)}
          <Switch>
              <Route exact path = '/' component={DefaultPage}/>
              <Route path= '/login' component={Login}/>
              <Route path= '/signup' component={Signup}/>
          </Switch>
        {/* </div> */}
          <button onClick={ ()=> console.log(users) }>display State users</button>
      </BrowserRouter>
    );
}
export default App;
