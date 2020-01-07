// farmer name, farmer location, farmer items
import React, { useState, useEffect } from "react";
import axios from 'axios';
import FarmerCard from '../FarmerComponents/FarmerCard';
import CustomerOrder from './CustomerOrder';
import CustomerDashboard from './CustomerDashboard';

import { Link, Route } from "react-router-dom";

export default function AvailableFarmers() {

    const [farmers, setFarmers] = useState([]);

    const [order, setOrder] = useState([]);

    useEffect(() => {

        axios
            .get(`https://farm-fresh-bw.herokuapp.com/`)
            .then(response => {
                console.log(response);
                // setOrder(response);
            })
            .catch(error => {
                console.log('error', error)
            })
    }, []);

    if (!farmers) {
        return <div>No farmers in your area... </div>
    }

    return (
        <section className="farmer-list">
            <div>
                {farmers.map(item => {
                    return (
                        <FarmerCard FarmerData={item} key={item.id} />
                    )
                })}
            </div>

            <Link to="/">Customer Page</Link><br />
            <Link to="/order/">Current Order</Link><br />
            <Link to="/dashboard/">Your Dashboard</Link><br />


            <Route exact path="/" />
            <Route exact path="/order/" render={props => <CustomerOrder />} />
            <Route exact path="/dashboard/" render={props => <CustomerDashboard />} />

        </section>
    );
}

