import React, { Component } from 'react';
import Homepage from './pages/homepage';
import Header from './components/header'
import { Route, Switch, Redirect } from 'react-router-dom';
//pages
import LogInPage from './pages/login-page';
import SignUpPage from './pages/signup-page';
//firebase
import { auth, createUserProfile } from './firebase/utils';
//redux
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/userActions';

class App extends Component {


  authListerner = null;

  componentDidMount = () => {
    const { setCurrentUser } = this.props;
    this.authListerner = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);



        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,

            ...snapShot.data()
          });
        });
      }

      await setCurrentUser(userAuth);


    });
  }
  componentWillUnmount = () => {
    this.authListerner()
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />

          <Route exact
            path='/login'
            render={() =>
              currentUser ? <Redirect to='/' /> : <LogInPage />
            } />
          <Route path='/signup' render={() =>
            currentUser ? <Redirect to='/' /> : <SignUpPage />
          } />



        </Switch>

      </div>
    );

  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = {
  setCurrentUser
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
