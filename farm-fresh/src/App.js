import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    Farm Fresh Produce
    </div>
  );
}

export default App;


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
