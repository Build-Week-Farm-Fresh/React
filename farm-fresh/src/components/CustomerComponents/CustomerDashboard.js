
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import '../../App.css'
import * as yup from 'yup';
import styled from '@emotion/styled';

export default function CustomerDashboard() {

  const [zip, setZip] = useState({
    zipCode: ""
  });

  const [zips, setZips] = useState([]);
  const [error, setError] = useState(false)

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
    setError(false)
    if (isValidUSZip(zip.zipCode) === false) {
      setError(true)
      return
    }
    addNewZip()
    setZip({ zipCode: "" })
  }


  function isValidUSZip(sZip) {
    return /^\d{5}(-\d{4})?$/.test(sZip);
  }

  return (
    <>
      <h1>My Dashboard</h1>
      {error && <p>Opps! Not a valid zipcode </p>}
      <form className="zipForm" onSubmit={submitZip}>
        <input
          type="text"
          required
          maxlength='5'
          name="zipCode"
          placeholder="5-digit zip code"
          value={zip.zipCode}
          onChange={zipChange}
        />
        <br />
        <Button color="success">Find Farmers(maybe)</Button>
      </form>
      <br />
      <Link to="/">
        <Button color="danger">Shopping Cart</Button>
      </Link>
    </>
  )

}