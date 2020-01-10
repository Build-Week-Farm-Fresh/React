// farmer name, farmer location, farmer items
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CustomerDashboard from './CustomerDashboard';


import { Link, Route, Switch } from "react-router-dom";

import axiosWithAuth from "../../utils/axiosWithAuth"; 

import ProduceCard from "../FarmerComponents/ProduceCard";
import PrivateRoute from '../../utils/PrivateRoute';

export default function AvailableProduce() {

    const [order, setOrder] = useState([]);


    useEffect(() => {
        axiosWithAuth()
            .get(`/produce/user/1`)
            .then(response => {
                console.log(response);
                setOrder(response.data);
            })
            .catch(error => {
                console.log('error', error)
            })
    }, []);

    if (!order) {
        return <div>No orders yet... </div>
    }

    return (
        <section className="farmer-list">
            <Link to="/">Home Page</Link><br />
            <Link to="/dashboard/">Your Dashboard</Link><br />

            <Switch>
                <Route exact path="/" />
                <Route exact path="/dashboard/" component={CustomerDashboard} />
            </Switch>

            <div>
                {order.map(item => {
                    return (
                        <ProduceCard ProduceData={item} key={item.id} />
                    )
                })}
            </div>

        </section>
    );
}

