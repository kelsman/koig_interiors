import React, { Component } from 'react';
import Homepage from './pages/homepage';
import Header from './components/header'
import Footer from './components/footer/index';
import { Route, Switch, Redirect } from 'react-router-dom';
//pages
import LogInPage from './pages/login-page';
import SignUpPage from './pages/signup-page';
import CartCheckoutPage from './pages/cart-checkout';
import FurniturePage from './pages/furniture-page';
import OutdoorPage from './pages/outdoor-page';
import RugPage from './pages/rug-page';
import LighteningPage from './pages/lightening-page';
import PaymentPage from './pages/payment-page'
//firebase
import { auth, createUserProfile } from './firebase/utils';
//redux
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/userActions';
import Chairs from './pages/chairs';

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
        <div className="content">
          <div className="content-inside">
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

              <Route exact path="/accent-chairs" render={() => <Chairs />} />
              <Route exact path='/furniture' render={() => <FurniturePage />} />
              <Route exact path="/checkout-page" render={() => < CartCheckoutPage />} />
              <Route exact path='/outdoor' render={() => <OutdoorPage />} />
              <Route exact path='/rugs' component={RugPage} />
              <Route exact path='/lightening' component={LighteningPage} />
              <Route exact path='/payment' component={PaymentPage} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>

    );

  }
}
const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  cartItems: cart.cartItems
});
const mapDispatchToProps = {
  setCurrentUser
};
export default connect(mapStateToProps, mapDispatchToProps)(App);



