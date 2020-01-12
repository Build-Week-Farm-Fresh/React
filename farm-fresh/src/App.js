import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from 'react-loader-spinner'
import FarmLogo from '../src/assets/farm-fresh-logo.png';

import { logout } from './store/actions'
import { connect } from 'react-redux'

import { Route, withRouter, Switch } from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute'

import FarmerLogin from "./components/user-forms/FarmerLogin"
import FarmerOrConsumer from './components/user-forms/FarmerOrConsumer'

import AddProduce from './components/FarmerComponents/AddProduce'
import EditProduce from './components/FarmerComponents/EditProduce'
import FarmerLogin from "./components/user-forms/FarmerLogin"
import FarmerDashboard from './components/FarmerComponents/FarmerDashboard'
import FarmerProduceList from './components/FarmerComponents/FarmerProduceList'

import CustomerDashboard from './components/CustomerComponents/CustomerDashboard'
import CustomerLandingPage from './components/CustomerComponents/CustomerLandingPage';
import CustomerLogin from './components/user-forms/CustomerLogin'

function App(props) {

  if (props.loginStart) {
    return (
      <div className="loader">
        <Loader type="Circles" width={150} height={150} />
      </div>
    )
  }
  return (
    <div className="App">
      <nav className="header-nav">
        <div className="logo">
          <img width="150px" src={FarmLogo} alt="Farm Fresh logo" />
        </div>
        <div className="links">
          <a className="marketing-page" href="https://elegant-mclean-7965e9.netlify.com/index.html">ABOUT FARM FRESH</a>
          <p onClick={() => { props.logout(props.history) }}>LOG OUT</p>
        </div> 
      </nav>
      <Switch>
        <Route exact path="/" component={FarmerOrConsumer} />
        <Route path="/farmer-login" component={FarmerLogin} />
        <Route path="/customer-login" component={CustomerLogin} />
        <PrivateRoute path="/farmer-dashboard" component={FarmerDashboard} />
        <PrivateRoute path="/customer-dashboard" component={CustomerLandingPage} />
        <PrivateRoute path="/dashboard" component={CustomerDashboard} />
        <PrivateRoute path="/myproduce" component={localStorage.getItem("token") ? FarmerProduceList : FarmerLogin} />
        <PrivateRoute path="/addproduce" component={AddProduce} />
        <PrivateRoute path="/editproduce/:id" component={EditProduce} />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => ({
  loginStart: state.loginStart
})
export default connect(
  mapStateToProps,
  { logout }
)(withRouter(App))

