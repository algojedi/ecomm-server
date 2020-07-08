import React from 'react'
import Header from './components/header/header'
import HomePage from './pages/home-page/home-page'
import HatsPage from './pages/hats-page/hats-page'
import Footer from './components/footer/footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Shop from './pages/shop-page/shop'
import SignInRegisterPage from './pages/sign-in-register/sign-in-register'
import {connect } from 'react-redux'
import CheckoutPage from './pages/checkout-page/checkout-page';
import Copyright from './components/copyright/copyright';

function App({ currentUser }) {
    // useEffect(() => {
        // const token = sessionStorage.getItem('token');
        // if (!token) {
        //     return;
        // }
        // dispatch(asyncTokenSignIn())

    // }, [dispatch])
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/hats' component={HatsPage} />
                <Route path='/shop' component={Shop} />
                <Route exact path='/checkout' component={CheckoutPage}/>
                <Route
                    exact
                    path='/signin'
                    render={() => {
                        return currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <SignInRegisterPage />
                        )
                    }}
                />
            </Switch>
            <Footer />
            <Copyright/>
        </React.Fragment>
    )
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
})
export default connect(mapStateToProps)(App)
