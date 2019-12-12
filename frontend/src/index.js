import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() s an extension that allows us to see state changes in the browser
const store = createStore(rootReducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 
, document.getElementById('root'));
serviceWorker.unregister();
