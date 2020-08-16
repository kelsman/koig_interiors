import React from 'react';
import Homepage from './pages/homepage';
import Header from './components/header'
import { Route, Switch } from 'react-router-dom';
//pages
import LogInPage from './pages/login-page';
import SignUpPage from './pages/signup-page';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/login' component={LogInPage} />
        <Route path='/signup' component={SignUpPage} />

      </Switch>

    </div>
  );
}

export default App;
