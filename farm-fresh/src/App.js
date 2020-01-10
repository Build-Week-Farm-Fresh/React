import React from 'react';

import './App.css';
import { logout } from './store/actions'
import { connect } from 'react-redux'

import { Route, withRouter, Switch } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import PrivateRoute from './utils/PrivateRoute'

import FarmerLogin from "./components/user-forms/FarmerLogin"
import FarmerOrConsumer from './components/user-forms/FarmerOrConsumer'
import FarmerDashboard from './components/FarmerComponents/FarmerDashboard'
import CustomerDashboard from './components/CustomerComponents/CustomerDashboard'

import CustomerLandingPage from './components/CustomerComponents/CustomerLandingPage';
import FarmerProduceList from './components/FarmerComponents/FarmerProduceList'
import CustomerLogin from './components/user-forms/CustomerLogin'
import AddProduce from './components/FarmerComponents/AddProduce'
import EditProduce from './components/FarmerComponents/EditProduce'

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
        <Loader type="Puff" width={100} height={100} />
      </div>
    )
  }
  return (
    <div className="App">
      <nav>
        <p onClick={() => { props.logout(props.history) }}>LOG OUT</p>
      </nav>
      <Switch>
        <Route exact path="/" component={FarmerOrConsumer} />
        <Route path="/farmer-login" component={FarmerLogin} />
        <Route path="/customer-login" component={CustomerLogin} />
        <PrivateRoute path="/farmer-dashboard" component={FarmerDashboard} />
        <PrivateRoute path="/customer-dashboard" component={CustomerLandingPage} />

        <PrivateRoute path="/dashboard" component={CustomerDashboard} />


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
