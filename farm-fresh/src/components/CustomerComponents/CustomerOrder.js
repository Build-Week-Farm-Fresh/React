// items, quantity, farmer

import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProduceCard from '../ProduceCard';
import CustomerCard from './CustomerCard';

const produceItems = [
    {
        name: 'apple',
        price: '1',
        quantity: '19',
        id: '1'
    },
    {
        name: 'orange',
        price: '2',
        quantity: '8',
        id: '2'
    },
    {
        name: 'carrot bunches',
        price: '3',
        quantity: '11',
        id: '3'
    },
    {
        name: 'guava',
        price: '5',
        quantity: '6',
        id: '4'
    },
    {
        name: 'coconut',
        price: '3.5',
        quantity: '9',
        id: '5'
    }
]

const customer = [
    {
        name: 'gunner',
        email: 'gunner@gunner.com',
        address: 'someplace',
        id: '12'
    }
    // ,
    // {
    //     name: 'ory',
    //     email: 'ory@ory.com',
    //     address: 'another place'
    // },
    // {
    //     name: 'py',
    //     email: 'py@py.com',
    //     address: 'that place'
    // }
]

export default function CustomerOrder() {

    const [order, setOrder] = useState(produceItems);


    // useEffect(() => {

    //     axios
    //         .get(`INSERT API LINK`)
    //         .then(response => {
    //             setOrder(response);
    //         })
    //         .catch(error => {
    //             console.log('error', error)
    //         })
    // }, []);

    if (!order) {
        return <div>Well, you gonna put something in your shopping cart? </div>
    }

    return (
        <section className="customer-order">
            <div>
                <CustomerCard CustomerData={customer[0]} key={customer[0].id} />
            </div>
            <div>
                {order.map(item => {
                    console.log(customer);
                    console.log(item);
                    return (
                        <ProduceCard ProduceData={item} key={item.id} />
                    )
                })}
            </div>
        </section>
    );
}

