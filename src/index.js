import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {
    Provider
} from 'react-redux';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'
import reducers from './reducer';

import registerServiceWorker from './registerServiceWorker';
import Login from './container/login/login.jsx'

import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
const store = createStore(
    reducers, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
ReactDOM.render(
    (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/* <AuthRoute></AuthRoute> */}
            <Switch>
              <Route path='/login' component={Login}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>), document.getElementById('root')
  )
  registerServiceWorker();
