// farmer name, farmer location, farmer items
import React, { useState, useEffect } from "react";
import axios from 'axios';
import FarmerCard from '../FarmerComponents/FarmerCard';
import CustomerOrder from './CustomerOrder';

import { Link, Route } from "react-router-dom";

export default function AvailableFarmers() {

    const [farmers, setFarmers] = useState([]);

    const [order, setOrder] = useState([]);

    useEffect(() => {

        axios
            .get(`INSERT API LINK`)
            .then(response => {
                setOrder(response);
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

            <Route exact path="/" />
            <Route exact path="/order/" render={props => <CustomerOrder />} />
        </section>
    );
}

