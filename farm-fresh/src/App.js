import React from 'react';

import './App.css';
import { logout } from './store/actions'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { Link, Route, withRouter, Switch } from "react-router-dom"
import FarmerLogin from "./components/user-forms/FarmerLogin"
import FarmerOrConsumer from './components/user-forms/FarmerOrConsumer'
import FarmerDashboard from './components/FarmerComponents/FarmerDashboard'
import CustomerDashboard from './components/CustomerComponents/CustomerDashboard'
import PrivateRoute from './utils/PrivateRoute'
// import FarmerCard from '../src/components/FarmerComponents/FarmerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerLandingPage from './components/CustomerComponents/CustomerLandingPage';
import FarmerProduceList from './components/FarmerComponents/FarmerProduceList'
import CustomerLogin from './components/user-forms/CustomerLogin'
import AddProduce from './components/FarmerComponents/AddProduce'
import EditProduce from './components/FarmerComponents/EditProduce'
import FarmLogo from '../src/components/user-forms/farm-fresh-logo.png';

function App(props) {

  if (props.loginStart) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
      }}>
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
        <PrivateRoute path="/myproduce" component={localStorage.getItem("token") ? FarmerProduceList : FarmerLogin} />
        <PrivateRoute path="/addproduce" component={AddProduce}/>
        <PrivateRoute path="/editproduce/:id" component={EditProduce}/>

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



// ENDPOINTS!!
// ----------------------------------------------------------------------------
// Farmer
// ----------------------------------------------------------------------------

// - CRUD produce from my inventory
//   - POST e.g.:
//     {
//       name: "",
//       farmer_id: "",
//       location: ""
//     }
//   - GET (all, individual item?)
//   - PUT e.g.:
//     {
//       id: "",
//       name: "",
//       farmer_id: "",
//       location: ""
//     }
//   - DELETE (grab produce_id from route)
// - view orders for my produce
//   - GET

// ----------------------------------------------------------------------------
// Consumer
// ----------------------------------------------------------------------------

// - view produce local to me
//   - GET (all produce)
// - add produce to shopping cart
//   - Context API 
// - place an order
//   - POST e.g.:
//   {
//     items: [
//       { name: "Apple", farmer_id: "1" },
//       { name: "Carrot", farmer_id: "1" }
//     ],
//     consumer_id: 2
//   }



// ----------------------------------------------------------------------------
// Auth
// ----------------------------------------------------------------------------

// - register
//   - POST e.g.:
//     {
//       username: "test@testing.com",
//       password: "test"
//     }
// - login
//   - POST e.g.:
//         {
//       username: "test@testing.com",
//       password: "test"
//     }
