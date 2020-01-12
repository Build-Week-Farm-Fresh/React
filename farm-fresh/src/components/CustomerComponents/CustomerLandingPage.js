// farmer name, farmer location, farmer items
import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth"; 

import CustomerDashboard from './CustomerDashboard';
import ProduceCard from "../FarmerComponents/ProduceCard";


export default function AvailableFarmers() {

    const [farmers] = useState([]);

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

    if (!farmers) {
        return <div>No farmers in your area... </div>
    }

    return (
        <section className="farmer-list">
            <div>
                {order.map(item => {
                    return (
                        <ProduceCard ProduceData={item} key={item.id} />
                    )
                })}
            </div>

            <Link to="/">Customer Page</Link><br />
            <Link to="/order/">Current Order</Link><br />
            <Link to="/dashboard/">Your Dashboard</Link><br />


            <Route exact path="/" />
            {/* <Route exact path="/order/" render={props => <CustomerOrder />} /> */}
            <Route exact path="/dashboard/" render={props => <CustomerDashboard />} />

        </section>
    );
}

