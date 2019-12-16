import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import DefaultPage from './components/DefaultPage'
import  Home from './containers/Home'
// import {useSelector, useDispatch , connect} from 'react-redux'
import {useSelector, useDispatch } from 'react-redux'
import { handleUsers} from './actions/index'
import { checkPropTypes } from 'prop-types';

//when using connect App need props arg
function App(props) {
    const users = useSelector(state => state.users)
    const displayUser = useSelector(state => state.users.displayUsers)
    // const isLoggedIn = useSelector(state => state.isLoggedIn)
    const dispatch = useDispatch()
    
    return (
      <BrowserRouter>
        {/* <div className="background"> */}
          {/* <button onClick={ ()=> dispatch(handleUsers) }>fetch user</button> */}
          {/* <button onClick={ ()=> props.handleUsers() }>fetch user</button> */}
          <Switch>
              <Route exact path = '/' component={DefaultPage}/>
              <Route path= '/login' component={Login}/>
              <Route path= '/signup' component={Signup}/>
              <Route path= '/home' component={Home} history={props.history}/>
          </Switch>
        {/* </div> */}
          {/* <button onClick={ ()=> console.log(users) }>display State users</button> */}
      </BrowserRouter>
    );
}
// const objForDispatch = { 
//   handleUsers
// }
// const mapStateToProps = (state)=>{
//   return state
// }
// export default connect(mapStateToProps, objForDispatch)(App)
export default App

