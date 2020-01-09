
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CustomerDashboard() {

  const [zip, setZip] = useState({
    zipCode: "12345"
  });

  const [zips, setZips] = useState([]);

  const zipChange = event => {
    setZip({ ...zip, [event.target.name]: event.target.value });
    console.log(zip);
  }

  const addNewZip = event => {
    const newZip = {
      id: Date.now(),
      zipcode: zip.zipCode
    }
    const allTheZips = [...zips, newZip];

    setZips(allTheZips);
  }


  const submitZip = event => {
    event.preventDefault();
    addNewZip()
    console.log('zip', zip);
    console.log('zips', zips);
  }

  return (
    <>
      <h1>My Dashboard</h1>
      <form onSubmit={submitZip}>
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={zip.zipCode}
          onChange={zipChange}
        />
        <button>Find Produce</button>
      </form>
      <Link to="/order/">
        <button>Shopping Cart</button>
      </Link>
    </>
  )

}

