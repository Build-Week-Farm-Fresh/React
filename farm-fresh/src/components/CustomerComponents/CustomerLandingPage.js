// farmer name, farmer location, farmer items

<div>HI THERE</div>


import React, { useState, useEffect } from "react";
import axios from 'axios';
import FarmerCard from '../FarmerComponents/FarmerCard';


export default function AvailableFarmers() {

    const [farmers, setFarmers] = useState([]);


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
        </section>
    );
}

