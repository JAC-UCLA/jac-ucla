import React from 'react';
import ReactDOM from 'react-dom';
import App from './comp/app.jsx';
import Callback from './comp/callback.jsx';
import Admin from './comp/admin.jsx';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import history from './comp/history.jsx';
import Auth from './comp/auth';
import data from './content.json';

let content = data;
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const update = (data) => {
  content = {...content, ...data}
  history.replace('/')
}

const auth = new Auth();
ReactDOM.render(
  <BrowserRouter history={history}>
  <Switch>
        <Route exact path="/" render={(props) => <App content={content} auth={auth} {...props} />} />
        <Route path="/admin" render={(props) => <Admin update={update} auth={auth} location={history} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);