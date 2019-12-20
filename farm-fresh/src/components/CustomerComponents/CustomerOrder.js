// items, quantity, farmer

import React from "react";
import axios from 'axios';
import ProduceCard from '../FarmerComponents/ProduceCard';
import CustomerCard from './CustomerCard';

const produceItems = [
    {
        name: 'apple',
        price: '1',
        quantity: '19'
    },
    {
        name: 'orange',
        price: '2',
        quantity: '8'
    },
    {
        name: 'carrot bunches',
        price: '3',
        quantity: '11'
    },
    {
        name: 'guava',
        price: '5',
        quantity: '6'
    },
    {
        name: 'coconut',
        price: '3.5',
        quantity: '9'
    }s
]

export default function CustomerOrder() {

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

    if (!order) {
        return <div>Well, you gonna put something in your shopping cart? </div>
    }

    return (
        <section className="customer-order">
            <div>
                <CustomerCard CustomerData={} key={} />
            </div>
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

